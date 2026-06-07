import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function FemmeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-universe="women">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
