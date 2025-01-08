import React from "react";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    title: "Descubre el secreto de la longevidad en Nicoya, Costa Rica",
    description:
      "Sumérgete en una de las cinco Zonas Azules del mundo y vive la experiencia.",
    button: "Explora más",
  },
  en: {
    title: "Discover the secret of longevity in Nicoya, Costa Rica",
    description:
      "Dive into one of the five Blue Zones of the world and live the experience.",
    button: "Explore More",
  },
};

const HeroSection = () => {
  const { language } = useLanguage();
  const { title, description, button } = translations[language];

  return (
    <section
      className="relative h-screen bg-cover bg-center mb-6"
      id="inicio"
      style={{
        backgroundImage: "url('/images/NICOYAF.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-300">
            {title}
          </h1>
          <p className="text-lg mb-6 text-stone-100 font-bold">{description}</p>
          <button
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition"
            onClick={() => (window.location.href = "#virtual-tour")}
          >
            {button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
