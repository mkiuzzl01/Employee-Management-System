import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="max-w-7xl m-auto">
        <nav>
          <Navbar></Navbar>
        </nav>
        <main  className="min-h-[calc(100vh-295px)]">{children}</main>
      </div>
      <Footer></Footer>
    </div>
  );
}
