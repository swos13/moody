import Footer from "@/components/Footer";
import HeaderHome from "@/components/HeaderHome";

export default function Layout() {
  return (
    <>
      <HeaderHome />
      <main className="flex-auto">Content</main>
      <Footer />
    </>
  );
}
