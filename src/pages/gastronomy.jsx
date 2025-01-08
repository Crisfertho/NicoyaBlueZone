import React from "react";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    title: "Gastronomía y Longevidad",
    description:
      "Explora recetas tradicionales que promueven una vida saludable y equilibrada, utilizando ingredientes frescos y naturales.",
    tipsTitle: "Tips para una Alimentación Saludable",
    tips: [
      "Utiliza ingredientes frescos y de temporada.",
      "Evita el exceso de sal y azúcar en las preparaciones.",
      "Prefiere métodos de cocción como el horneado o al vapor.",
    ],
    triviaTitle: "¿Sabías que...?",
    trivia:
      "Estudios en las zonas azules (lugares con alta longevidad) muestran que una dieta basada en plantas y alimentos locales contribuye a una vida más larga y saludable.",
    recipes: [
      {
        nombre: "Arroz de Maíz",
        ingredientes: ["Lentejas", "Zanahoria", "Cebolla", "Ajo", "Comino"],
        pasos: [
          "Lava las lentejas y déjalas en remojo por 30 minutos.",
          "Sofríe la cebolla, ajo y zanahoria.",
          "Agrega las lentejas y cúbrelas con agua.",
          "Cocina a fuego medio hasta que estén suaves. Añade comino al gusto.",
        ],
        imagen: "/images/gastronomy/sopa-de-lentejas.webp",
        nutricion: "Alto en fibra y proteínas. Bajo en grasas.",
      },
      {
        nombre: "Tortillas de Maíz Caseras",
        ingredientes: ["Masa de maíz", "Agua", "Sal"],
        pasos: [
          "Mezcla la masa de maíz con agua y una pizca de sal hasta obtener una textura suave.",
          "Forma pequeñas bolitas y aplánalas con una prensa para tortillas.",
          "Cocina en un comal caliente por ambos lados.",
        ],
        imagen: "/images/gastronomy/tortillas.webp",
        nutricion: "Fuente de carbohidratos complejos y energía sostenible.",
      },
      {
        nombre: "Arroz de Maíz",
        ingredientes: ["Lentejas", "Zanahoria", "Cebolla", "Ajo", "Comino"],
        pasos: [
          "Lava las lentejas y déjalas en remojo por 30 minutos.",
          "Sofríe la cebolla, ajo y zanahoria.",
          "Agrega las lentejas y cúbrelas con agua.",
          "Cocina a fuego medio hasta que estén suaves. Añade comino al gusto.",
        ],
        imagen: "/images/gastronomy/sopa-de-lentejas.webp",
        nutricion: "Alto en fibra y proteínas. Bajo en grasas.",
      },
    ],
  },
  en: {
    title: "Gastronomy and Longevity",
    description:
      "Explore traditional recipes that promote a healthy and balanced life using fresh and natural ingredients.",
    tipsTitle: "Tips for Healthy Eating",
    tips: [
      "Use fresh and seasonal ingredients.",
      "Avoid excessive salt and sugar in preparations.",
      "Prefer cooking methods like baking or steaming.",
    ],
    triviaTitle: "Did you know...?",
    trivia:
      "Studies in blue zones (places with high longevity) show that a plant-based diet and local foods contribute to a longer and healthier life.",
    recipes: [
      {
        nombre: "Corn Rice",
        ingredientes: ["Lentils", "Carrot", "Onion", "Garlic", "Cumin"],
        pasos: [
          "Wash the lentils and soak them for 30 minutes.",
          "Sauté the onion, garlic, and carrot.",
          "Add the lentils and cover them with water.",
          "Cook over medium heat until soft. Add cumin to taste.",
        ],
        imagen: "/images/gastronomy/sopa-de-lentejas.webp",
        nutricion: "High in fiber and protein. Low in fat.",
      },
      {
        nombre: "Homemade Corn Tortillas",
        ingredientes: ["Corn dough", "Water", "Salt"],
        pasos: [
          "Mix the corn dough with water and a pinch of salt until you get a smooth texture.",
          "Make small balls and flatten them with a tortilla press.",
          "Cook on a hot griddle on both sides.",
        ],
        imagen: "/images/gastronomy/tortillas.webp",
        nutricion: "Source of complex carbohydrates and sustainable energy.",
      },
    ],
  },
};

const Gastronomia = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-gradient-to-br from-sky-950 to-purple-200/80 min-h-screen p-6 pt-20 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900">
      <h1 className="text-xl md:text-4xl font-extrabold text-rose-300/80 text-center pb-4 mt-4">
        {t.title}
      </h1>
      <BackButton />
      <p className="mt-3 mb-6 text-base text-stone-200 text-center">
        {t.description}
      </p>

      <div className="flex flex-wrap gap-5 justify-center">
        {t.recipes.map((receta, index) => (
          <div
            className="bg-zinc-100/70 shadow-md rounded-lg p-5 max-w-xs text-center text-black"
            key={index}
          >
            <Image
              src={receta.imagen}
              alt={`Imagen de ${receta.nombre}`}
              width={500}
              height={500}
              className="h-52 w-full object-cover rounded-md"
            />
            <h2 className="my-2 text-lg font-bold">{receta.nombre}</h2>
            <p className="border-b-2 border-gray-700 pb-2">
              <strong>Ingredientes:</strong> {receta.ingredientes.join(", ")}
            </p>
            <p className="mt-2">
              <strong>Pasos:</strong>
            </p>
            <ol className="list-decimal list-inside text-left border-b-2 border-gray-700 pb-2">
              {receta.pasos.map((paso, i) => (
                <li key={i}>{paso}</li>
              ))}
            </ol>
            <p className="mt-2">
              <strong>Información Nutricional:</strong> {receta.nutricion}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-5">
        <section className="bg-emerald-400/20 p-5 rounded-md">
          <h2 className="text-lg md:text-2xl font-extrabold mb-2 text-yellow-300/80">
            {t.tipsTitle}
          </h2>
          <ul className="list-disc list-inside text-sm md:text-base text-white">
            {t.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className="bg-teal-400/20 p-5 rounded-md">
          <h2 className="text-lg md:text-xl font-extrabold text-red-300 mb-2">
            {t.triviaTitle}
          </h2>
          <p className="text-gray-100 text-sm md:text-base">{t.trivia}</p>
        </section>
      </div>
    </div>
  );
};

export default Gastronomia;
