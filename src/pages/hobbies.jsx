import { useState } from "react";
import BackButton from "@/components/BackButton";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    title: "Pasatiempos para una Vida Plena",
    description:
      "Dedicar tiempo a tus pasatiempos no solo te hace feliz, sino que también fortalece tu salud mental y emocional. Encuentra actividades que te apasionen y llévalas a cabo con dedicación.",
    hobbies: [
      {
        title: "Pintar y Dibujar",
        image: "/images/hobbies/art.webp",
        shortDescription: "Expresa tu creatividad y relájate creando arte.",
        longDescription:
          "Pintar y dibujar te permite expresarte de formas únicas. Es una actividad relajante que mejora tu creatividad y ayuda a reducir el estrés. Puedes empezar con materiales simples como lápices o acuarelas y descubrir técnicas avanzadas con la práctica.",
      },
      {
        title: "Tocar un Instrumento",
        image: "/images/hobbies/musica.webp",
        shortDescription: "La música es una forma poderosa de liberar emociones.",
        longDescription:
          "Aprender a tocar un instrumento mejora tu coordinación y memoria. Además, puede ser una manera poderosa de conectar con tus emociones y transmitir sentimientos. Ya sea que elijas la guitarra, el piano o cualquier otro instrumento, ¡la práctica te hará disfrutar del proceso!",
      },
      {
        title: "Cultivo y Jardinería",
        image: "/images/hobbies/cultivo.webp",
        shortDescription: "Conéctate con la naturaleza cuidando tus plantas.",
        longDescription:
          "La jardinería es una excelente manera de conectarte con la naturaleza. Cuidar plantas no solo mejora el ambiente de tu hogar, sino que también tiene beneficios terapéuticos, como reducir el estrés y fomentar la paciencia. Comienza con plantas fáciles de cuidar y ve creciendo tu jardín.",
      },
    ],
    close: "Cerrar",
    more: "Ver más",
  },
  en: {
    title: "Hobbies for a Fulfilling Life",
    description:
      "Spending time on hobbies not only makes you happy but also strengthens your mental and emotional health. Find activities you are passionate about and pursue them with dedication.",
    hobbies: [
      {
        title: "Painting and Drawing",
        image: "/images/hobbies/art.webp",
        shortDescription: "Express your creativity and relax by making art.",
        longDescription:
          "Painting and drawing allow you to express yourself in unique ways. It is a relaxing activity that enhances creativity and helps reduce stress. Start with simple materials like pencils or watercolors and discover advanced techniques as you practice.",
      },
      {
        title: "Playing an Instrument",
        image: "/images/hobbies/musica.webp",
        shortDescription: "Music is a powerful way to release emotions.",
        longDescription:
          "Learning to play an instrument improves coordination and memory. Moreover, it can be a powerful way to connect with your emotions and express feelings. Whether you choose the guitar, piano, or another instrument, practice will make the process enjoyable!",
      },
      {
        title: "Gardening",
        image: "/images/hobbies/cultivo.webp",
        shortDescription: "Connect with nature by tending your plants.",
        longDescription:
          "Gardening is an excellent way to connect with nature. Taking care of plants not only improves your home environment but also has therapeutic benefits like reducing stress and fostering patience. Start with easy-to-care-for plants and grow your garden over time.",
      },
    ],
    close: "Close",
    more: "Learn more",
  },
};

const Hobbies = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedHobby, setSelectedHobby] = useState(null);

  return (
    <div className="bg-gradient-to-b from-sky-950 to-purple-200/80 min-h-screen p-6 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-900/80 dark:text-stone-100 mb-10 mt-16">
          {t.title}
        </h1>
        <BackButton />
        <div className="mb-12 mt-4">
          <p className="text-center text-lg text-gray-100 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.hobbies.map((hobby, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={hobby.image}
                alt={hobby.title}
                width={500}
                height={500}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-purple-700">
                  {hobby.title}
                </h3>
                <p className="text-gray-600 mt-2">{hobby.shortDescription}</p>
                <button
                  onClick={() => setSelectedHobby(hobby)}
                  className="mt-4 text-sm text-white bg-purple-700 py-2 px-4 rounded hover:bg-purple-800"
                >
                  {t.more}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedHobby && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-dark-bg rounded-lg shadow-lg max-w-md p-6">
            <h2 className="text-2xl font-extrabold text-purple-700">
              {selectedHobby.title}
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-100">{selectedHobby.longDescription}</p>
            <button
              onClick={() => setSelectedHobby(null)}
              className="mt-6 text-sm text-white bg-purple-700 py-2 px-4 rounded hover:bg-purple-800"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hobbies;
