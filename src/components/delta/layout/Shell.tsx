import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ScrollProgress } from "./ScrollProgress";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="d-dark flex min-h-screen flex-col font-body">
      <ScrollProgress />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
