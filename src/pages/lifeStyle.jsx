import { useState } from "react";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    title: "Estilo de Vida para una Vida Longeva",
    heroText:
      "Un estilo de vida que fomente la longevidad se basa en un equilibrio entre hábitos saludables, conexión social y bienestar emocional. La dieta juega un papel crucial; optar por alimentos ricos en nutrientes como frutas, verduras, cereales integrales, grasas saludables y proteínas magras puede reducir el riesgo de enfermedades crónicas. Culturas famosas por su longevidad, como las de las Zonas Azules (Japón, Italia y Costa Rica, entre otras), suelen seguir dietas predominantemente vegetales con porciones moderadas. Además, evitar el tabaco y limitar el consumo de alcohol también son prácticas fundamentales.",
    moreInfoButton: "Más Información...",
    mainModalText: [
      "La actividad física regular es otra piedra angular para una vida larga y saludable. Ejercicios moderados, como caminar, practicar yoga o jardinería, ayudan a mantener un cuerpo ágil, mejoran la salud cardiovascular y fortalecen el sistema inmunológico. Es igualmente importante mantenerse mentalmente activo; leer, aprender nuevas habilidades o participar en juegos de estrategia estimulan el cerebro, reduciendo el riesgo de deterioro cognitivo.",
      " Por último, la conexión social y el manejo del estrés son determinantes. Estar rodeado de una comunidad solidaria, ya sea familia, amigos o compañeros, brinda apoyo emocional y sentido de pertenencia. La meditación, la gratitud y el contacto con la naturaleza son formas efectivas de mantener un estado mental equilibrado. En conjunto, estos hábitos crean un estilo de vida que no solo prolonga la vida, sino que también mejora su calidad.",
    ],
    closeButton: "Cerrar",
    pillarsTitle: "Pilares del Estilo de Vida Saludable",
    pillars: [
      {
        title: "Cohesión Social",
        description:
          "Fortalece tus lazos familiares y amistades para mejorar tu bienestar emocional.",
        image: "/images/lifeStyles/cohesion.webp",
        action: "Descubre cómo",
        modalContent: [
          "La cohesión social ayuda a fortalecer lazos familiares y de amistad, lo que mejora el bienestar emocional.",
          "Participa en actividades comunitarias y cultiva relaciones de apoyo mutuo.",
          "Dedica tiempo a compartir con tus seres queridos mediante cenas, reuniones o actividades recreativas.",
          "Explora herramientas digitales como videollamadas para mantenerte conectado con amigos y familiares lejanos.",
        ],
        interactiveContent: {
          quiz: {
            question: "¿Cuál de las siguientes actividades refuerza más la cohesión social?",
            options: ["Practicar deportes en equipo", "Estar solo en casa", "Ver televisión sin interacción"],
            correct: 0,
          },
          tips: ["Participa en grupos comunitarios.", "Organiza reuniones familiares regularmente."]
        },
      },
      {
        title: "Relajación y Bienestar",
        description:
          "Incorpora técnicas de relajación como la meditación o el mindfulness.",
        image: "/images/lifeStyles/relajacion.webp",
        action: "Explorar prácticas",
        modalContent: [
          "Prueba prácticas como la meditación, el yoga o ejercicios de respiración profunda.",
          "Estas actividades reducen el estrés, mejoran la concentración y fomentan el bienestar.",
          "Inicia con 5 minutos de meditación diaria para establecer un hábito saludable.",
          "Usa aplicaciones móviles como Calm o Headspace para guiar tus sesiones de relajación.",
        ],
        interactiveContent: {
          audioGuide: "/audio/relaxation-session.mp3",
          breathingExercise: {
            steps: ["1. Inhala profundamente durante 4 segundos.", "2. Sostén la respiración por 7 segundos.", "3. Exhala lentamente durante 8 segundos."]
          }
        },
      },
      {
        title: "Propósito de Vida",
        description:
          "Encuentra un propósito claro que te motive a seguir adelante cada día.",
        image: "/images/lifeStyles/proposito.webp",
        action: "Más información",
        modalContent: [
          "Identificar un propósito de vida claro te brinda motivación y sentido.",
          "Reflexiona sobre lo que te apasiona y establece metas significativas.",
          "Escribe un diario sobre tus aspiraciones y cómo alcanzar tus objetivos.",
          "Busca inspiración en historias de personas que han superado obstáculos para cumplir sus metas.",
        ],
        interactiveContent: {
          journalingPrompt: "Escribe 3 cosas que te motivan cada día.",
          video: "/videos/purpose-inspiration.mp4",
        },
      },
    ],
    testimonialsTitle: "Testimonios Inspiradores",
    testimonials: [
      {
        name: "María López",
        feedback:
          "Cambiar mi estilo de vida me ha permitido reconectar con mi familia y disfrutar más de los pequeños momentos.",
        image: "/images/lifeStyles/user1.webp",
      },
      {
        name: "Carlos Martínez",
        feedback:
          "Descubrí mi propósito de vida y me siento más feliz y motivado que nunca.",
        image: "/images/lifeStyles/user3.webp",
      },
      {
        name: "Ana González",
        feedback:
          "Las prácticas de relajación me han ayudado a reducir el estrés y disfrutar más de mi día a día.",
        image: "/images/lifeStyles/user2.webp",
      },
    ],
  },
  en: {
    title: "Lifestyle for a Long Life",
    heroText:
      "A lifestyle that promotes longevity is based on a balance of healthy habits, social connection, and emotional well-being. Diet plays a crucial role; opting for nutrient-rich foods such as fruits, vegetables, whole grains, healthy fats, and lean proteins can reduce the risk of chronic diseases. Cultures famous for their longevity, such as the Blue Zones (Japan, Italy, and Costa Rica, among others), often follow predominantly plant-based diets with moderate portions. Additionally, avoiding tobacco and limiting alcohol consumption are also fundamental practices.",
    moreInfoButton: "More Information...",
    mainModalText: [
      "Regular physical activity is another cornerstone for a long and healthy life. Moderate exercises, such as walking, practicing yoga, or gardening, help maintain an agile body, improve cardiovascular health, and strengthen the immune system. It is equally important to stay mentally active; reading, learning new skills, or engaging in strategy games stimulate the brain, reducing the risk of cognitive decline.",
      "Lastly, social connection and stress management are key determinants. Being surrounded by a supportive community, whether family, friends, or colleagues, provides emotional support and a sense of belonging. Meditation, gratitude, and contact with nature are effective ways to maintain a balanced mental state. Together, these habits create a lifestyle that not only prolongs life but also enhances its quality.",
    ],
    closeButton: "Close",
    pillarsTitle: "Pillars of a Healthy Lifestyle",
    pillars: [
      {
        title: "Social Connection",
        description:
          "Strengthen your family and friendship bonds to improve emotional well-being.",
        image: "/images/lifeStyles/cohesion.webp",
        action: "Learn how",
        modalContent: [ 
          "Social cohesion helps strengthen family and friendship bonds, improving emotional well-being.",
          "Participate in community activities and cultivate relationships of mutual support.",
        ],
      },
      {
        title: "Relaxation and Well-being",
        description:
          "Incorporate relaxation techniques like meditation or mindfulness.",
        image: "/images/lifeStyles/relajacion.webp",
        action: "Explore practices",
        modalContent: [ 
          "Try practices like meditation, yoga, or deep breathing exercises.",
          "These activities reduce stress, improve concentration, and promote well-being.",
        ],
      },
      {
        title: "Purpose in Life",
        description:
          "Find a clear purpose that motivates you to move forward each day.",
        image: "/images/lifeStyles/proposito.webp",
        action: "More information",
        modalContent: [ 
          "Identifying a clear purpose in life provides motivation and meaning.",
          "Reflect on what you are passionate about and set meaningful goals.",
        ], 
      },
    ],
    testimonialsTitle: "Inspiring Testimonials",
    testimonials: [
      {
        name: "Maria Lopez",
        feedback:
          "Changing my lifestyle has allowed me to reconnect with my family and enjoy the small moments more.",
        image: "/images/lifeStyles/user1.webp",
      },
      {
        name: "Carlos Martinez",
        feedback:
          "I discovered my purpose in life and feel happier and more motivated than ever.",
        image: "/images/lifeStyles/user3.webp",
      },
      {
        name: "Ana Gonzalez",
        feedback:
          "Relaxation practices have helped me reduce stress and enjoy my day-to-day life more.",
        image: "/images/lifeStyles/user2.webp",
      },
    ],
  },
};

const LifeStyle = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeModal, setActiveModal] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null); // Nueva: Estado para la opción seleccionada
  const [feedbackMessage, setFeedbackMessage] = useState(""); // Nueva: Estado para el mensaje de retroalimentación

  const handleQuizOptionClick = (isCorrect) => {
    // Manejo de la opción seleccionada
    if (isCorrect) {
      setFeedbackMessage("¡Correcto! Esta actividad refuerza la cohesión social.");
    } else {
      setFeedbackMessage("Incorrecto. Intenta nuevamente.");
    }
    setTimeout(() => setFeedbackMessage(""), 3000); // Limpia el mensaje después de 3 segundos
  };
  
  return (
    <div className="bg-gradient-to-br from-sky-950 to-purple-100/90 min-h-screen px-6 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-300 mb-6 pt-24">
          {t.title}
        </h1>
        <BackButton />

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center mb-10 mt-8">
          <Image
            src="/images/comunidad.webp"
            alt="Cohesión social"
            width={500}
            height={500}
            className="w-full md:w-1/2 h-auto rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
          />
          <div className="mt-6 md:mt-0 md:ml-8 overflow-y-hidden text-center md:text-left">
            <p className="grid text-base lg:text-xl bg-lime-300/30 rounded-lg p-4 text-white">
              {t.heroText}
              <button
                className="bg-blue-700/75 text-sm text-white px-4 py-3 mt-4 mx-auto rounded-full shadow-lg hover:bg-blue-800/60 transition-all duration-300 transform hover:scale-105"
                onClick={() => setActiveModal("main")}
              >
                {t.moreInfoButton}
              </button>
            </p>
          </div>
        </div>

        {/* Modal */}
        {activeModal === "main" && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-dark-bg rounded-lg p-8 shadow-2xl w-11/12 md:w-1/2 max-h-screen overflow-auto">
              {t.mainModalText.map((text, idx) => (
                <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 mb-4" key={idx}>
                  {text}
                </p>
              ))}
              <button
                className="bg-red-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-600 transition-colors duration-300"
                onClick={() => setActiveModal(null)}
              >
                {t.closeButton}
              </button>
            </div>
          </div>
        )}

<h2 className="text-xl sm:text-3xl font-semibold text-gray-200 text-center mb-10">
  {t.pillarsTitle}
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {t.pillars.map((pillar, idx) => (
    <div
      key={idx}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <Image
        src={pillar.image}
        alt={pillar.title}
        width={500}
        height={500}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold text-indigo-700 mb-2">
          {pillar.title}
        </h3>
        <p className="text-gray-600 mb-4">{pillar.description}</p>
        <button
          className="text-indigo-700 hover:underline"
          onClick={() => setActiveModal(pillar.title)}
        >
          {pillar.action} →
        </button>
      </div>
    </div>
  ))}
</div>

{/* Modales */}
{t.pillars.map(
  (pillar, idx) =>
    activeModal === pillar.title && (
      <div
        key={idx}
        className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div className="bg-white dark:bg-dark-bg rounded-lg p-8 shadow-2xl w-11/12 md:w-1/2 max-h-screen overflow-auto">
          {pillar.modalContent.map((text, i) => (
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 mb-4" key={i}>
              {text}
            </p>
          ))}

          {/* Interactive Content */}
          {pillar.interactiveContent && (
            <div className="mt-4">
              {pillar.interactiveContent?.quiz && (
                    <div className="mt-4">
                      <h4 className="font-bold text-lg mb-2">{pillar.interactiveContent.quiz.question}</h4>
                      <ul>
                        {pillar.interactiveContent.quiz.options.map((option, i) => (
                          <li
                            key={i}
                            onClick={() =>
                              handleQuizOptionClick(i === pillar.interactiveContent.quiz.correct)
                            }
                            className="cursor-pointer text-gray-700 hover:text-indigo-500 py-2 px-4 bg-gray-100 rounded-md mb-2 shadow-md hover:bg-gray-200"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                      {feedbackMessage && (
                        <p className="mt-4 text-center font-semibold text-lg text-green-600">
                          {feedbackMessage}
                        </p>
                      )}
                    </div>
                  )}
              {pillar.interactiveContent.breathingExercise && (
                <div className="mb-4">
                  <h4 className="font-bold text-lg">Ejercicio de Respiración:</h4>
                  <ul>
                    {pillar.interactiveContent.breathingExercise.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}
              {pillar.interactiveContent.journalingPrompt && (
                <div className="mb-4">
                  <h4 className="font-bold text-lg">Escribe:</h4>
                  <p>{pillar.interactiveContent.journalingPrompt}</p>
                </div>
              )}
            </div>
          )}
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-600 transition-colors duration-300"
            onClick={() => setActiveModal(null)}
          >
            {t.closeButton}
          </button>
        </div>
      </div>
    )
)}
        {/* Testimonials */}
        <h2 className="text-xl sm:text-3xl font-semibold text-slate-100 dark:text-gray-200 text-center mt-14 mb-8">
          {t.testimonialsTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-6">
          {t.testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <h3 className="text-lg font-bold text-indigo-700">
                  {testimonial.name}
                </h3>
              </div>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default LifeStyle;
