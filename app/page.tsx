import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import FAQ from "@/components/home/Faq";
import HowItWorks from "@/components/home/How-It-Works";
import HeroSection from "@/components/home/Main";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
}
