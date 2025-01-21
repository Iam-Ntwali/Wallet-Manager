import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";

import MainSection from "@/components/Privacy/MainSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}
