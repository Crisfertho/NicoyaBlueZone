import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import History from "@/components/History";
import LongevitySection from "@/components/Card";
import TouristGuide from "@/components/TouristMap";
import CultureSection from "@/components/CultureSection";
import LongevityCalculator from "@/components/LongevityCalculator";
import VirtualTour from "@/components/VirtualTour";
import CarouselSeccion from "@/components/Carousel";
import Contact from "@/components/Contact";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    welcome: "Bienvenido a Nicoya Zona Azul del Mundo",
  },
  en: {
    welcome: "Welcome to Nicoya, Blue Zone of the World",
  },
};

export default function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="container mx-auto p-6 m-4 mt-20">
      <h1 className="text-2xl md:text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-500 via-green-400 to-yellow-400 text-transparent bg-clip-text drop-shadow-md hover:drop-shadow-lg transition duration-300">
        {t.welcome}
      </h1>

      <HeroSection />
      <aside className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-3/5 border-b-2 shadow-slate-300">
          <History />
        </div>
        <div className="w-full lg:w-2/5 pl-6 border-b-2">
          <CarouselSeccion />
        </div>
      </aside>
      <LongevitySection />
      <CultureSection />
      <TouristGuide />
      <LongevityCalculator />
      <VirtualTour />
      <Contact />

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500/50 text-white px-5 py-3 mb-14 rounded-full shadow-lg hover:bg-blue-600/80 transition duration-300"
        >
          ↑
        </button>
      )}
    </main>
  );
}
