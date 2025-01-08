import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    title: "Cultura y Tradiciones",
    sections: [
      {
        title: "Festividades y Celebraciones",
        content:
          "Nicoya es una región rica en tradiciones festivas que reflejan la identidad cultural de su gente y su conexión con la naturaleza y la espiritualidad. Entre las celebraciones más emblemáticas se encuentran las fiestas de la Virgen de Guadalupe, patrona de Nicoya, donde se combinan procesiones, música y danzas autóctonas en un ambiente de profunda devoción y alegría. También destacan las celebraciones del Día de la Yegüita, una fiesta única de origen indígena que simboliza la gratitud y la protección divina. Estas festividades reúnen a familias y vecinos, fortaleciendo los lazos comunitarios y celebrando la herencia cultural de la región.",
      },
      {
        title: "Costumbres y Valores",
        content:
          "La comunidad de Nicoya se distingue por su fuerte sentido de pertenencia y respeto mutuo, valores esenciales en una de las zonas azules del mundo, donde sus habitantes tienen una vida excepcionalmente longeva y saludable. La solidaridad, el respeto por los ancianos y el compromiso con un estilo de vida simple y equilibrado son aspectos centrales en la cultura local. La práctica de compartir y vivir en armonía con el entorno se traduce en costumbres como el consumo de alimentos tradicionales, el respeto por la tierra y el uso de remedios naturales. Estos valores y costumbres contribuyen a la longevidad y bienestar de los nicoyanos, quienes siguen un modelo de vida basado en la gratitud y la sostenibilidad.",
      },
      {
        title: "Artesanía y Música",
        content:
          "La artesanía de Nicoya es un reflejo de su herencia indígena y su conexión con el entorno natural. Los habitantes de la región elaboran cerámicas inspiradas en los diseños precolombinos, utilizando técnicas ancestrales transmitidas de generación en generación. Los colores vivos y las formas geométricas de estas piezas representan la flora y fauna locales, y son una muestra del orgullo cultural de la región. En cuanto a la música, el folclore nicoyano está impregnado de sonidos de marimba y guitarras, acompañados de bailes tradicionales que cuentan historias de amor, respeto por la tierra y espiritualidad. Estas expresiones artísticas enriquecen la identidad cultural de Nicoya y preservan sus tradiciones.",
      },
    ],
    footerText:
      "Nicoya es una de las pocas zonas azules del mundo, donde la gente vive más tiempo y con mejor calidad de vida. Descubre el secreto de su longevidad a través de sus tradiciones y cultura.",
  },
  en: {
    title: "Culture and Traditions",
    sections: [
      {
        title: "Festivities and Celebrations",
        content:
          "Nicoya is a region rich in festive traditions that reflect the cultural identity of its people and their connection to nature and spirituality. Among the most emblematic celebrations are the festivals of the Virgin of Guadalupe, patroness of Nicoya, where processions, music, and native dances are combined in an atmosphere of deep devotion and joy. Also noteworthy are the celebrations of the Day of the Little Mare, a unique festival of indigenous origin that symbolizes gratitude and divine protection. These festivities bring together families and neighbors, strengthening community ties and celebrating the cultural heritage of the region.",
      },
      {
        title: "Customs and Values",
        content:
          "The community of Nicoya stands out for its strong sense of belonging and mutual respect, essential values in one of the Blue Zones of the world, where its inhabitants have an exceptionally long and healthy life. Solidarity, respect for the elderly, and commitment to a simple and balanced lifestyle are central aspects of local culture. The practice of sharing and living in harmony with the environment translates into customs such as the consumption of traditional foods, respect for the land, and the use of natural remedies. These values and customs contribute to the longevity and well-being of the people of Nicoya, who follow a lifestyle based on gratitude and sustainability.",
      },
      {
        title: "Crafts and Music",
        content:
          "Nicoya's crafts reflect its indigenous heritage and connection to the natural environment. The inhabitants of the region make ceramics inspired by pre-Columbian designs, using ancestral techniques passed down from generation to generation. The bright colors and geometric shapes of these pieces represent the local flora and fauna and are a testament to the cultural pride of the region. As for music, Nicoya's folklore is imbued with the sounds of marimba and guitars, accompanied by traditional dances that tell stories of love, respect for the land, and spirituality. These artistic expressions enrich Nicoya's cultural identity and preserve its traditions.",
      },
    ],
    footerText:
      "Nicoya is one of the few Blue Zones in the world, where people live longer and with better quality of life. Discover the secret of their longevity through their traditions and culture.",
  },
};

const CultureSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectSection, setSelectSection] = useState(null);
  const [timer, setTimer] = useState(null); // Para controlar el temporizador
  const { language } = useLanguage();
  const { title, sections, footerText } = translations[language];

  const defaultImage = {
    src: "/images/culture-photos/defaultImage.webp",
    alt: "DefaultImage",
  };

  const sectionImages = {
    0: [
      {
        src: "/images/culture-photos/anexion.webp",
        alt: "Anexión de Guanacaste",
        author: "Municipalidad de Nicoya",
        source: "https://www.nicoya.go.cr/",
      },
      {
        src: "/images/culture-photos/Nicoya-Virgen-Guadalupe.webp",
        alt: "Festival Virgen de Guadalupe",
        author: "Mari Arango",
        source:
          "https://vozdeguanacaste.com/nicoya-celebrara-a-la-virgen-de-guadalupe-con-documentales-y-un-festival-virtual/",
      },
      {
        src: "/images/culture-photos/sanblas.webp",
        alt: "Fiestas San Blas",
        author: "ElPaís.cr",
        source: "https://www.nicoya.go.cr/articulo/129/san-blas-patrono-de-nicoya",
      },
    ],
    1: [
      {
        src: "/images/culture-photos/picaleña.webp",
        alt: "Pica e' Leña",
        author: "Municipalidad de Nicoya",
        source: "https://www.nicoya.go.cr/articulo/135/pica-e%C2%B4-lena",
      },
      {
        src: "/images/culture-photos/conexionnaturaleza.webp",
        alt: "Conexión con la Naturaleza",
        author: "GuanaNoticias",
        source:
          "https://guananoticias.com/mas/ambiente/cooperativa-busca-agricultores-de-guanacaste-para-impulsar-agricultura-regenerativa-y-sostenible/",
      },
      {
        src: "/images/culture-photos/adultosmayores.webp",
        alt: "Sabiduría de los Ancianos",
        author: "Silleny Sanabria Soto.",
        source:
          "https://www.periodicomensaje.com/otras/social/6206-centenarios-de-la-peninsula-de-nicoya-necesitan-de-su-ayuda",
      },
    ],
    2: [
      {
        src: "/images/culture-photos/bailestipicos.webp",
        alt: "Baile Folclórico",
        author: "elmundocr",
        source:
          "https://elmundo.cr/costa-rica/manifestaciones-contra-el-plan-fiscal-se-llenaron-de-bailes-y-musica-en-nicoya/",
      },
      {
        src: "/images/culture-photos/artesania.webp",
        alt: "Cerámica Chorotega",
        author: "IA",
        source: "https://designer.microsoft.com/",
      },
      {
        src: "/images/culture-photos/musica.webp",
        alt: "Música de Marimba",
        author: "ElPaís.cr",
        source: "https://www.elpais.cr/",
      },
    ],
  };

  const toggleSection = (index) => {
    setSelectSection(index);
    setCurrentIndex(0);
  };

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
      clearTimeout(timer);
    } else {
      setExpandedIndex(index);
      const newTimer = setTimeout(() => {
        setExpandedIndex(null);
      }, 19000);
      setTimer(newTimer);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sectionImages[selectSection].length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sectionImages[selectSection].length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="container mx-auto my-5 border-t-2" id="culture">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center m-8 text-blue-900 dark:text-blue-100/90">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sección de Texto Interactiva */}
        <div className="p-5 rounded-lg overflow-hidden shadow-lg shadow-blue-800 bg-gradient-to-b from-indigo-950 to-white/70">
          {sections.map((section, index) => (
            <div key={index} className="mt-6 mb-4">
              <h3
                onClick={() => toggleExpand(index)}
                className="text-2xl font-semibold my-2 cursor-pointer flex items-center transition-transform transform hover:scale-105 text-slate-900 dark:text-sky-100"
              >
                <span className="mr-2 text-blue-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    ></path>
                  </svg>
                </span>
                {section.title}
              </h3>
              <p
                className={`text-amber-100 transition-all duration-500 ease-in-out ${
                  expandedIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {section.content}
                <button
                  onClick={() => toggleSection(index)}
                  className="underline text-blue-900/60 ml-2"
                >
                  {language === "es" ? "Ver más..." : "See more..."}
                </button>
              </p>
            </div>
          ))}
          <div className="mb-3 pt-8">
            <p className="text-sm lg:text-lg font-semibold text-slate-700 italic">
              {footerText}
            </p>
          </div>
        </div>

        {/* Contenedor del Carrusel */}
        <div>
          <h3 className="text-2xl font-extrabold text-center mb-4 text-blue-900 dark:text-blue-100/90">
          {language === "es" ? "Explora la Cultura" : "Explore the Culture"}
          </h3>
          <div className="relative w-full h-56 md:h-96 overflow-hidden rounded-lg p-5 shadow-lg shadow-blue-800 flex justify-center items-center">
            {selectSection === null ? (
              <Image
                src={defaultImage.src}
                alt={defaultImage.alt}
                width={800}
                height={600}
                className="rounded-lg hover:scale-105 transition-transform duration-500"
              />
            ) : (
              sectionImages[selectSection].map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex justify-center items-center transition-transform duration-700 ease-in-out transform ${
                    index === currentIndex
                      ? "translate-x-0"
                      : index < currentIndex
                      ? "-translate-x-full"
                      : "translate-x-full"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))
            )}

            {/* Controles del carrusel */}
            {selectSection !== null && (
              <>
                <button
                  type="button"
                  className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30 h-10 w-10 bg-white/30 hover:bg-white/50 rounded-full"
                  onClick={prevSlide}
                >
                  &#8592;
                </button>
                <button
                  type="button"
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 z-30 h-10 w-10 bg-white/30 hover:bg-white/50 rounded-full"
                  onClick={nextSlide}
                >
                  &#8594;
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
