import Head from "next/head";
import HeroSection from "@/app/ui/components/homepage/HeroSection";
import BrandsCarousel from "@components/homepage/BrandsCrousel";
import ServicesSection from "@components/homepage/ServicesSection";
import CtaSection from "@components/homepage/CtaSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-50">
        <HeroSection />
        <BrandsCarousel />
        <ServicesSection />
        <CtaSection />
      </main>
    </>
  );
}