import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function HommeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-universe="men">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
