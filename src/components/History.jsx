// src/components/History.js
import React from "react";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    title: "Historia de Nicoya, Guanacaste",
    content:
      "Nicoya, uno de los cantones más antiguos de Costa Rica, está ubicado en la hermosa provincia de Guanacaste. Esta región es conocida por su rica historia y cultura, influenciada tanto por los pueblos indígenas chorotegas como por las tradiciones españolas que llegaron durante la colonización. Nicoya es famosa por ser una de las pocas Zonas Azules en el mundo, donde la longevidad y calidad de vida de sus habitantes ha sido motivo de numerosos estudios.",
    districtsTitle: "Distritos de Nicoya",
    districts: [
      {
        name: "Nicoya",
        description: "El distrito central, corazón histórico y cultural del cantón.",
      },
      {
        name: "Mansión",
        description:
          "Conocido por sus paisajes naturales y cercanía a reservas biológicas.",
      },
      {
        name: "San Antonio",
        description: "Una comunidad vibrante y acogedora, rica en tradiciones.",
      },
      {
        name: "Quebrada Honda",
        description:
          "Zona agrícola, famosa por sus vistas panorámicas y agricultura.",
      },
      {
        name: "Sámara",
        description: "Con playas paradisíacas y ambiente turístico.",
      },
      {
        name: "Nosara",
        description:
          "Internacionalmente reconocida por su comunidad de bienestar y ecoturismo.",
      },
      {
        name: "Belén de Nosarita",
        description: "Un pequeño pero encantador distrito rural.",
      },
    ],
  },
  en: {
    title: "History of Nicoya, Guanacaste",
    content:
      "Nicoya, one of the oldest cantons in Costa Rica, is located in the beautiful province of Guanacaste. This region is known for its rich history and culture, influenced both by the indigenous Chorotega people and by the Spanish traditions that arrived during colonization. Nicoya is famous for being one of the few Blue Zones in the world, where the longevity and quality of life of its inhabitants have been the subject of numerous studies.",
    districtsTitle: "Districts of Nicoya",
    districts: [
      {
        name: "Nicoya",
        description:
          "The central district, historical and cultural heart of the canton.",
      },
      {
        name: "Mansión",
        description:
          "Known for its natural landscapes and proximity to biological reserves.",
      },
      {
        name: "San Antonio",
        description: "A vibrant and welcoming community, rich in traditions.",
      },
      {
        name: "Quebrada Honda",
        description: "An agricultural zone, famous for its panoramic views.",
      },
      {
        name: "Sámara",
        description: "With paradisiacal beaches and a tourist atmosphere.",
      },
      {
        name: "Nosara",
        description:
          "Internationally recognized for its wellness community and ecotourism.",
      },
      {
        name: "Belén de Nosarita",
        description: "A small but charming rural district.",
      },
    ],
  },
};

const History = () => {
  const { language } = useLanguage();
  const { title, content, districtsTitle, districts } = translations[language];

  return (
    <section className="px-6" id="history">
      <div className="container mx-auto max-w-4xl text-center my-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-base md:text-lg mb-8 leading-relaxed">{content}</p>
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            {districtsTitle}
          </h3>
          <ul className="text-gray-800 space-y-2">
            {districts.map((district, index) => (
              <li key={index}>
                <span className="font-bold text-blue-600">
                  {district.name}:
                </span>{" "}
                {district.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default History;
