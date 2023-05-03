import Footer from "@/Components/footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
