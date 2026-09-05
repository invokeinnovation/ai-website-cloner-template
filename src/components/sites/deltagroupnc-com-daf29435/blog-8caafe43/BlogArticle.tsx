import Image from "next/image";
import Link from "next/link";
import { ARTICLES } from "./articles";
import { ABOUT_WIDGET, NEWS } from "./blog-data";

function WidgetHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="text-[17px] font-bold uppercase tracking-wide text-neutral-900">{children}</h3>
      <span className="mt-2 block h-0.5 w-10 bg-[#ee171f]" />
    </div>
  );
}

export function BlogArticle({ slug }: { slug: keyof typeof ARTICLES }) {
  const article = ARTICLES[slug];
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-[1170px] grid-cols-1 gap-10 px-[15px] py-12 lg:grid-cols-[1fr_320px]">
        <article>
          <p className="text-[13px] font-bold uppercase tracking-wide text-[#777]">Blog</p>
          <h1 className="mt-2 text-[32px] font-bold uppercase text-neutral-900 sm:text-[38px]">{article.title}</h1>
          <span className="mt-4 block h-0.5 w-[50px] bg-[#ee171f]" />
          <p className="mt-5 text-[13px] uppercase tracking-wide text-[#999]">
            Posted on {article.date} by Delta Construction
          </p>

          <div className="mt-8">
            <Image
              src={article.image}
              alt={article.title}
              width={1172}
              height={800}
              priority
              className="h-auto w-full"
            />
          </div>

          <div className="mt-8 space-y-5">
            {article.paras.map((p, i) => (
              <p key={i} className="text-[15.6px] leading-[26px] text-[#555]">
                {p}
              </p>
            ))}
          </div>
        </article>

        <aside className="space-y-10">
          <div>
            <WidgetHeading>{ABOUT_WIDGET.title}</WidgetHeading>
            <p className="text-[15px] leading-[24px] text-[#777]">{ABOUT_WIDGET.text}</p>
          </div>
          <div>
            <WidgetHeading>News</WidgetHeading>
            <ul className="space-y-4">
              {NEWS.map((n) => (
                <li key={n.href + n.title} className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 flex-col items-center justify-center border border-[#ee171f] text-[#ee171f]">
                    <span className="text-[16px] font-bold leading-none">{n.day}</span>
                    <span className="text-[10px] uppercase leading-none">{n.mon}</span>
                  </span>
                  <Link href={n.href} className="text-[15px] font-semibold uppercase text-neutral-800 transition-colors hover:text-[#ee171f]">
                    {n.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
