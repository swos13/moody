import Footer from "@/components/Footer";
import HeaderAuth from "@/components/HeaderAuth";

export default function Layout() {
  return (
    <>
      <HeaderAuth />
      <main className="flex-auto">Content</main>
      <Footer />
    </>
  );
}
