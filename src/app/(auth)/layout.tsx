import Footer from "@/components/Footer";
import HeaderAuth from "@/components/HeaderAuth";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <HeaderAuth />
      <main className="flex-auto">{children}</main>
      <Footer />
    </>
  );
}
