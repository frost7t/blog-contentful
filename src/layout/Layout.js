import Footer from "@/Components/footer/Footer";
import Navbar from "@/Components/navigation/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
