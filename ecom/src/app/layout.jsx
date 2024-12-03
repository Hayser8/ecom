import Header from "@/components/Header";
import Footer from "@/components/Footer";
import './globals.css';

export const metadata = {
  title: "Clothy Exclusiva",
  description: "Moda exclusiva y sofisticada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
