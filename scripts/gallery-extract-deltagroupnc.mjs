// Extracts project-grouped gallery structure + downloads all images for the
// deltagroupnc.com portfolio + 4 category pages. Full-fidelity (all images).
import { mkdir, writeFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const BASE = "https://deltagroupnc.com";
const SITE_KEY = "deltagroupnc-com-daf29435";
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const HEADERS = {
  "User-Agent": UA,
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  Referer: BASE + "/",
};

// route -> page-key
export const GALLERY_PAGES = [
  { route: "/portfolio", key: "portfolio-a872f251" },
  { route: "/residential-construction.html", key: "residential-construction-html-491a1682" },
  { route: "/restaurant-construction.html", key: "restaurant-construction-html-bd1f89cf" },
  { route: "/nail-salon-construction.html", key: "nail-salon-construction-html-1c54b6a2" },
  { route: "/commercial-construction.html", key: "commercial-construction-html-1a4582f0" },
];

// Primary displayed image per gallery item = the lazy-load data-src (one per <img>).
const DATASRC_RE =
  /data-src="(?:https?:\/\/deltagroupnc\.com)?(\/wp-content\/uploads\/[^"]+?\.(?:jpg|jpeg|png|webp))"/gi;

function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#8211;/g, "–")
    .replace(/&#8217;/g, "’")
    .replace(/&#038;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

// Parse the page HTML into { hero, title, subtitle, intro, groups:[{title, images[]}] }
function parse(html) {
  // hero banner: first bg-image url in a banner before content, else first big image
  const heroMatch = html.match(/class="bg[^"]*"[^>]*style="[^"]*background-image:\s*url\(([^)]+)\)/i);
  let hero = heroMatch ? heroMatch[1].replace(/["']/g, "") : null;

  // Page hero title/subtitle (banner text-box). Grab first <h1> in a banner and small label above.
  const titleM = html.match(/<h1[^>]*>\s*(?:<[^>]+>)*\s*([^<]{2,60})</i);
  const title = titleM ? decode(titleM[1]) : null;

  // Split by project group titles
  const parts = html.split(/<div class="box-title-name">/);
  const groups = [];
  for (let i = 1; i < parts.length; i++) {
    const seg = parts[i];
    const titleEnd = seg.indexOf("</div>");
    const gtitle = decode(seg.slice(0, titleEnd));
    // images belong to this group until the next split (already segmented)
    const imgs = [...seg.matchAll(DATASRC_RE)]
      .map((m) => m[1])
      .filter((p) => !/Logo|footer-image/i.test(p));
    // dedupe within group, preserve order
    const seen = new Set();
    const uniq = [];
    for (const p of imgs) {
      const base = p.split("/").pop();
      if (!seen.has(base)) {
        seen.add(base);
        uniq.push(p);
      }
    }
    groups.push({ title: gtitle, images: uniq });
  }
  return { hero, title, groups };
}

async function fetchHtml(route) {
  const res = await fetch(BASE + route, { headers: HEADERS });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${route}`);
  return res.text();
}

async function downloadImage(urlPath, destDir) {
  const name = urlPath.split("/").pop();
  const dest = path.join(destDir, name);
  if (existsSync(dest)) return "skip";
  const res = await fetch(BASE + urlPath, { headers: HEADERS });
  if (!res.ok) return `FAIL ${name} ${res.status}`;
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return "ok";
}

async function run() {
  const dry = process.argv.includes("--dry");
  const summary = [];
  for (const page of GALLERY_PAGES) {
    const html = await fetchHtml(page.route);
    const data = parse(html);
    const totalImgs = data.groups.reduce((n, g) => n + g.images.length, 0);
    summary.push({
      route: page.route,
      hero: data.hero,
      title: data.title,
      groups: data.groups.length,
      images: totalImgs,
      sampleGroups: data.groups.slice(0, 3).map((g) => `${g.title} (${g.images.length})`),
    });

    if (!dry) {
      const imgDir = path.join("public/sites", SITE_KEY, page.key, "images");
      await mkdir(imgDir, { recursive: true });
      // collect all images (incl hero) unique
      const all = new Set();
      if (data.hero && /wp-content/.test(data.hero)) all.add(data.hero.replace(BASE, ""));
      for (const g of data.groups) for (const im of g.images) all.add(im);
      const list = [...all];
      let done = 0,
        fail = 0;
      const CONC = 8;
      for (let i = 0; i < list.length; i += CONC) {
        const batch = list.slice(i, i + CONC);
        const rs = await Promise.all(batch.map((u) => downloadImage(u, imgDir)));
        for (const r of rs) {
          if (r === "ok" || r === "skip") done++;
          else {
            fail++;
            if (fail <= 5) console.error(r);
          }
        }
      }
      // write manifest (basenames)
      const manifest = {
        route: page.route,
        hero: data.hero ? data.hero.split("/").pop() : null,
        title: data.title,
        groups: data.groups.map((g) => ({
          title: g.title,
          images: g.images.map((p) => p.split("/").pop()),
        })),
      };
      const compDir = path.join("src/components/sites", SITE_KEY, page.key);
      await mkdir(compDir, { recursive: true });
      await writeFile(path.join(compDir, "gallery.json"), JSON.stringify(manifest, null, 2));
      const files = await readdir(imgDir);
      console.log(`${page.route}: groups=${data.groups.length} images=${totalImgs} downloaded_ok=${done} fail=${fail} filesOnDisk=${files.length}`);
    }
  }
  console.log(JSON.stringify(summary, null, 2));
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
