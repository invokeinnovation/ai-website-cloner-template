// Downloads all assets for deltagroupnc.com home clone into the namespaced asset root.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = "https://deltagroupnc.com";
const OUT = "public/sites/deltagroupnc-com-daf29435/root-8a5edab2/images";

const files = [
  // logo (shared brand)
  "/wp-content/uploads/2022/02/Delta-Construction-Logo-LONGWAYS.png",
  // hero slides
  "/wp-content/uploads/2022/03/20220314_152551328_iOS-scaled.jpg",
  "/wp-content/uploads/2022/02/1.png",
  "/wp-content/uploads/2022/02/r3.png",
  "/wp-content/uploads/2022/03/20210302_134153000_iOS.jpg",
  // service icon image (storefront)
  "/wp-content/uploads/2022/02/street-shop-_64.png",
  // portfolio
  "/wp-content/uploads/2022/03/20211209_142046046_iOS-scaled.jpg",
  "/wp-content/uploads/2022/02/p2.webp",
  "/wp-content/uploads/2022/02/m8.webp",
  "/wp-content/uploads/2022/02/89.jpeg",
  "/wp-content/uploads/2022/02/A2.png",
  "/wp-content/uploads/2022/02/14-1.jpeg",
  "/wp-content/uploads/2022/02/32.jpeg",
  "/wp-content/uploads/2022/02/43-1.jpg",
  // footer bg
  "/wp-content/uploads/2022/02/footer-image.jpg",
];

async function download(rel) {
  const url = BASE + rel;
  const name = rel.split("/").pop();
  const dest = path.join(OUT, name);
  try {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    return `OK   ${name} (${(buf.length / 1024).toFixed(0)}kb)`;
  } catch (e) {
    return `FAIL ${name}: ${e.message}`;
  }
}

async function run() {
  await mkdir(OUT, { recursive: true });
  const results = [];
  for (let i = 0; i < files.length; i += 4) {
    const batch = files.slice(i, i + 4);
    results.push(...(await Promise.all(batch.map(download))));
  }
  console.log(results.join("\n"));
}
run();
