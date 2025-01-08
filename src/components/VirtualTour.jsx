import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    title: "Nicoya, Zona Azul de Costa Rica",
    description:
      "Explora videos grabados en esta región que destacan por qué es una de las únicas cinco Zonas Azules del mundo, reconocida por su longevidad y calidad de vida excepcionales.",
    credits: "Video cortesía de",
    reserved: "Todos los derechos reservados.",
  },
  en: {
    title: "Nicoya, Blue Zone of Costa Rica",
    description:
      "Explore videos recorded in this region that highlight why it is one of the only five Blue Zones in the world, renowned for its exceptional longevity and quality of life.",
    credits: "Video courtesy of",
    reserved: "All rights reserved.",
  },
};

const videos = [
  {
    src: "https://www.youtube.com/embed/zwtl3qDXS-A?rel=0&modestbranding=1",
    title: "Encontramos SUPERHUMANOS en Costa Rica",
    author: "Araya Vlogs",
    source: "https://www.youtube.com/channel/UC3qUohkq4AYazFnCsfs_Wkg",
  },
  {
    src: "https://www.youtube.com/embed/xpMQPrkwcBY?si=nwQSreCNz_1GbSSW",
    title: "NAMU NEKUPE TALLER DE ARTESANÍA",
    author: "Namu Nakupe Matambú Tours",
    source: "https://www.youtube.com/@namunakupematambutours9240",
  },
  {
    src: "https://www.youtube.com/embed/rgCEGQPc1LA?si=JXfXPRmCpzFbfVZF",
    title:
      "Ganas de Vivir: Sabiduría Centenaria para una vida feliz y longeva",
    author: "Ivanna Lajara",
    source: "https://www.youtube.com/@ivlajarab",
  },
  {
    src: "https://www.youtube.com/embed/vCbo5wd_j3o?si=bB9_SpTc1xiJoH-J",
    title:
      "Súper Humanos Cerca de 800 habitantes con más de 90 años viven en localidad de Nicoya",
    author: "Meganoticias",
    source: "https://www.youtube.com/meganoticiasoficial",
  },
  {
    src: "https://www.youtube.com/embed/uxK-xALeoTs?si=p_FHmR6ywR3PyXNF",
    title: "La dieta para una vida eterna",
    author: "DW Español",
    source: "https://www.youtube.com/dwespanol",
  },
  {
    src: "https://www.youtube.com/embed/2GrMZ9t93pg?si=_nHhBVmpuBr1pueH",
    title:
      "Long Life Food of Costa Rica!! HUGE BREAKFAST + Secrets to Eating in Nicoya!!",
    author: "Mark Wiens",
    source: "https://www.youtube.com/@MarkWiens",
  },
  {
    src: "https://www.youtube.com/embed/xqTVUK6CLzI?si=u3MGd4k9KaZ5_f5L",
    title:
      "AQUÍ LAS PERSONAS VIVEN MÁS DE 100 AÑOS 🇨🇷 | Nicoya, Costa Rica",
    author: "FOGONIX",
    source: "https://www.youtube.com/@FOGONIX",
  },
];

const VirtualTour = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();
  const t = translations[language];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="container mx-auto my-16 px-4" id="virtual-tour">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8">
        {t.title}
      </h2>
      <p className="text-base md:text-xl text-center pb-10 mx-32">
        {t.description}
      </p>

      {/* Carrusel de videos */}
      <div className="relative flex items-center justify-center w-full overflow-hidden">
        {/* Botón anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 bg-gray-700/50 dark:bg-slate-400/50 text-cyan-900 dark:text-white rounded-full py-2 px-3 hover:bg-gray-800/70 dark:hover:bg-slate-300/60 transition"
        >
          ◀
        </button>

        {/* Video activo */}
        <div className="w-full md:w-3/4 aspect-video flex justify-center items-center transition-transform duration-700">
          <iframe
            src={videos[currentIndex].src}
            title={videos[currentIndex].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded shadow-md"
          ></iframe>
        </div>

        {/* Botón siguiente */}
        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 bg-gray-700/50 dark:bg-slate-400/50 text-cyan-900 dark:text-white rounded-full py-2 px-3 hover:bg-gray-800/70 dark:hover:bg-slate-300/60 transition"
        >
          ▶
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            } hover:bg-blue-300 transition`}
          ></button>
        ))}
      </div>

      {/* Créditos del canal */}
      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        {t.credits}{" "}
        <a
          href={videos[currentIndex].source}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 dark:text-blue-200 hover:underline"
        >
          {videos[currentIndex].author}
        </a>
        . {t.reserved}
      </div>
    </section>
  );
};

export default VirtualTour;
