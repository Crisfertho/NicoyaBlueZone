import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    title: "Fotografías de Nuestra Herencia",
    description:
      "Imágenes que muestran un poco de la historia de Nicoya y sus diferentes lugares históricos que lo hacen ser una de las zonas azules del mundo.",
  },
  en: {
    title: "Photographs of Our Heritage",
    description:
      "Images that show a glimpse of Nicoya's history and its different historical places that make it one of the blue zones of the world.",
  },
};

const CarouselSeccion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();
  const { title, description } = translations[language];

  const images = [
    { src: "/images/culture-photos/eldiadia.webp", alt: "El Vivir" },
    { src: "/images/culture-photos/festival.webp", alt: "Festival" },
    { src: "/images/culture-photos/danza.webp", alt: "Danza" },
  ];

  const prevSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );

  const nextSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );

  return (
    <section>
      <div>
        <h3 className="text-3xl font-semibold text-center mb-4 mt-5">{title}</h3>
        <p className="text-sm md:text-lg m-4">{description}</p>
        <div className="relative w-full h-56 md:h-96 overflow-hidden rounded-lg flex justify-center items-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex justify-center items-center transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
          <button
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={prevSlide}
          >
            &#8592;
          </button>
          <button
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={nextSlide}
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarouselSeccion;
