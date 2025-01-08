import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    title: "Secretos de la Longevidad",
    cards: [
      {
        title: "Gastronomía",
        image: "/images/dieta.webp",
        description: "Recetas tradicionales que favorecen la longevidad.",
        link: "/gastronomy",
      },
      {
        title: "Estilo de Vida",
        image: "/images/comunidad.webp",
        description: "La importancia de la cohesión social y el apoyo comunitario.",
        link: "/lifeStyle",
      },
      {
        title: "Actividad Física",
        image: "/images/ejercicio.webp",
        description: "Ejercicio moderado diario que mantiene la salud física.",
        link: "/exercise",
      },
      {
        title: "Pasatiempos",
        image: "/images/hobbies.webp",
        description: "Actividades que promueven una mente activa y feliz.",
        link: "/hobbies",
      },
    ],
  },
  en: {
    title: "Secrets of Longevity",
    cards: [
      {
        title: "Gastronomy",
        image: "/images/dieta.webp",
        description: "Traditional recipes that promote longevity.",
        link: "/gastronomy",
      },
      {
        title: "Lifestyle",
        image: "/images/comunidad.webp",
        description: "The importance of social cohesion and community support.",
        link: "/lifeStyle",
      },
      {
        title: "Physical Activity",
        image: "/images/ejercicio.webp",
        description: "Daily moderate exercise that maintains physical health.",
        link: "/exercise",
      },
      {
        title: "Hobbies",
        image: "/images/hobbies.webp",
        description: "Activities that promote an active and happy mind.",
        link: "/hobbies",
      },
    ],
  },
};

const LongevitySection = () => {
  const { language } = useLanguage();
  const { title, cards } = translations[language];

  return (
    <section className="mx-auto my-4 mb-10" id="longevity">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center m-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {cards.map((card, index) => (
          <Link href={card.link} key={index}>
            <div className="rounded-md overflow-hidden shadow-lg m-2 hover:bg-slate-200 dark:hover:bg-slate-700/50">
              <Image
                className="w-full h-48 object-cover hover:h-52"
                src={card.image}
                alt={card.title}
                width={500}
                height={300}
              />
              <div className="px-6 py-4">
                <h2 className="font-extrabold text-lg mb-2">{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LongevitySection;
