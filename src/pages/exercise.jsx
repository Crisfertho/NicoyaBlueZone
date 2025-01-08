
import { useState } from "react";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import SectionCard from "@/components/Card";
import { useLanguage } from "../context/LanguageContext";

const translations = {

    es: {
      title: "Mantente Activo, Vive Mejor",
      description:
        "Don Julio, con sus 103 años cumplidos, despertaba cada mañana con el canto del gallo y el olor de las montañas verdes que abrazan su pequeño rancho en Guanacaste. Mientras se ajustaba el sombrero de ala ancha y preparaba su caballo, no podía evitar sonreír ante el fresco aire que llenaba sus pulmones. Era la misma rutina de toda su vida: cuidar el ganado, sembrar maíz y disfrutar de los frutos de la tierra. En esta región, donde el sol parece más cálido y las lluvias nutren generosamente los suelos, se esconde uno de los secretos mejor guardados: la longevidad de su gente. Guanacaste, parte de una de las cinco Zonas Azules del mundo, alberga a personas que han vivido más de un siglo. ¿Pero qué hace de este lugar un refugio para los años largos y bien vividos?",
      discoverButton: "Descubre más beneficios",
      modal: {
        header1: "Una conexión íntima con la tierra y los ciclos de la vida.",
        paragraph1:
          " Desde hace generaciones, los nicoyanos han trabajado la tierra y cuidado de su ganado siguiendo prácticas tradicionales que respetan los ciclos naturales. Este estilo de vida al aire libre no solo les da una exposición constante al sol, fuente natural de vitamina D, sino que también los mantiene físicamente activos durante toda su vida. El trabajo en la agricultura y la ganadería no es excesivamente mecanizado, lo que implica un esfuerzo físico continuo pero moderado. Este nivel de actividad diaria ayuda a mantener un corazón fuerte, articulaciones flexibles y una mente despejada. La rutina de cuidar animales, sembrar maíz, frijoles o yuca, y cosechar frutas tropicales como guanábanas y papayas, se convierte en un entrenamiento físico que no exige horarios de gimnasio ni rutinas extremas.",
        header2: "La dieta como un reflejo del entorno",
        paragraph2:
          "  La alimentación es otro aspecto crucial. Los agricultores y ganaderos de Nicoya suelen consumir lo que producen: una dieta basada en alimentos naturales, locales y frescos. El maíz nixtamalizado, las tortillas caseras, los frijoles negros, las frutas tropicales, y ocasionalmente carnes magras, son pilares de su dieta. La preparación de estos alimentos sigue métodos tradicionales, evitando los procesados y los excesos de azúcares refinados. Además, el agua en la región contiene niveles elevados de calcio y magnesio, esenciales para la salud ósea y cardiovascular. Esta combinación de alimentos ricos en fibra, antioxidantes y nutrientes esenciales se traduce en cuerpos más resistentes al envejecimiento y a enfermedades crónicas.",
        header3: "El ritmo pausado de la vida rural",
        paragraph3:
          "El trabajo en la ganadería y la agricultura, aunque demandante, no está dominado por las prisas modernas. La gente de Nicoya vive al ritmo del sol, despertando temprano y terminando sus labores antes de la puesta del sol. Este ritmo natural, acompañado de siestas cortas al mediodía y una conexión profunda con la naturaleza, ayuda a reducir el estrés, uno de los principales enemigos de la longevidad en otras partes del mundo.",
        header4: "Comunidades unidas y propósito en la vida",
        paragraph4:
          "Por último, las relaciones sociales en las zonas rurales de Nicoya son profundamente significativas. Las comunidades son pequeñas y muy unidas, y cada individuo tiene un propósito claro en su vida, ya sea cuidar del ganado, ayudar en las cosechas o enseñar a las nuevas generaciones las tradiciones del lugar. Este sentido de pertenencia y utilidad es fundamental para mantener la salud mental y emocional, incluso en edades avanzadas.",
        closeButton: "Cerrar",
      },
      exerciseTitle:
        "Ejercicios o actividades que mantienen en movimiento a las personas.",
      exercises: [
        {
          title: "Caminar",
          description: "Camina 30 minutos al día para mantenerte activo.",
          details:
            "Las personas mayores han transformado las actividades cotidianas en un estilo de vida activo que las mantiene saludables y longevas. Caminar largas distancias para visitar vecinos, cuidar el ganado o ir al campo ha sido, durante décadas, una forma natural de ejercicio aeróbico. Esta actividad constante fortalece el corazón, mejora la circulación y ayuda a mantener el peso adecuado.",
        },
        {
          title: "Actividades Diarias",
          description: "Mejora tu flexibilidad y calma tu mente con yoga.",
          details:
            "Las tareas diarias como recoger y picar leña o acarrear agua desde pozos o ríos requieren fuerza y coordinación, actuando como una especie de entrenamiento funcional. Al agacharse para recoger frutos, sembrar semillas o atender huertos, mantienen la flexibilidad de sus articulaciones y fortalecen los músculos del tren inferior.",
        },
        {
          title: "Ganadería y Cultivo",
          description: "Disfruta del aire libre mientras cuidas tu jardín.",
          details:
            "La ganadería y el cultivo también los mantiene en movimiento continuo, con esfuerzos moderados que no sobrecargan el cuerpo pero aseguran una rutina física constante. Esta combinación de movimientos variados, expuestos al aire libre y con pausas para descansar, promueve un balance ideal entre esfuerzo y recuperación, contribuyendo a una vejez activa, independiente y llena de vitalidad.",
        },
      ],
    },
    en: {
      title: "Stay Active, Live Better",
      description:
        "Don Julio, at 103 years old, woke up every morning with the rooster's crow and the smell of the green mountains surrounding his small ranch in Guanacaste. As he adjusted his wide-brimmed hat and prepared his horse, he couldn't help but smile at the fresh air filling his lungs. It was the same routine of his entire life: caring for livestock, planting corn, and enjoying the fruits of the land. In this region, where the sun seems warmer and the rains generously nourish the soils, lies one of the best-kept secrets: the longevity of its people. Guanacaste, part of one of the five Blue Zones in the world, is home to people who have lived over a century. But what makes this place a refuge for long and well-lived years?",
      discoverButton: "Discover more benefits",
      modal: {
        header1: "An intimate connection with the land and life cycles.",
        paragraph1:
          "For generations, the people of Nicoya have worked the land and cared for their livestock following traditional practices that respect natural cycles. This outdoor lifestyle not only gives them constant exposure to the sun, a natural source of vitamin D, but also keeps them physically active throughout their lives. Work in agriculture and livestock farming is not overly mechanized, which implies continuous but moderate physical effort. This level of daily activity helps maintain a strong heart, flexible joints, and a clear mind. The routine of caring for animals, planting corn, beans, or cassava, and harvesting tropical fruits such as soursops and papayas, becomes a physical workout that does not require gym schedules or extreme routines.",
        header2: "Diet as a reflection of the environment",
        paragraph2:
          "Nutrition is another crucial aspect. Farmers and ranchers in Nicoya tend to consume what they produce: a diet based on natural, local, and fresh foods. Nixtamalized corn, homemade tortillas, black beans, tropical fruits, and occasionally lean meats are staples of their diet. The preparation of these foods follows traditional methods, avoiding processed foods and excessive refined sugars. In addition, the water in the region contains high levels of calcium and magnesium, essential for bone and cardiovascular health. This combination of fiber-rich foods, antioxidants, and essential nutrients results in bodies more resistant to aging and chronic diseases.",
        header3: "The slow pace of rural life",
        paragraph3:
          "Work in livestock farming and agriculture, though demanding, is not dominated by modern rushes. The people of Nicoya live at the pace of the sun, waking up early and finishing their work before sunset. This natural rhythm, accompanied by short naps at noon and a deep connection with nature, helps reduce stress, one of the main enemies of longevity in other parts of the world.",
        header4: "United communities and purpose in life",
        paragraph4:
          "Lastly, social relationships in the rural areas of Nicoya are deeply meaningful. Communities are small and very close-knit, and each individual has a clear purpose in life, whether it is caring for livestock, helping with the harvest, or teaching the new generations the local traditions. This sense of belonging and usefulness is essential for maintaining mental and emotional health, even in advanced ages.",
        closeButton: "Close",
      },
      exerciseTitle:
        "Exercises or activities that keep people moving.",
      exercises: [
        {
          title: "Walking",
          description: "Walk 30 minutes a day to stay active.",
          details:
            "Older people have transformed daily activities into an active lifestyle that keeps them healthy and long-lived. Walking long distances to visit neighbors, care for livestock, or go to the fields has been, for decades, a natural form of aerobic exercise. This constant activity strengthens the heart, improves circulation, and helps maintain the proper weight.",
        },
        {
          title: "Daily Activities",
          description: "Improve your flexibility and calm your mind with yoga.",
          details:
            "Daily tasks like gathering firewood or carrying water from wells or rivers require strength and coordination, acting as a kind of functional training. Bending down to pick fruits, plant seeds, or tend gardens maintains the flexibility of their joints and strengthens the muscles of the lower body.",
        },
        {
          title: "Livestock and Farming",
          description: "Enjoy the outdoors while tending your garden.",
          details:
            "Livestock farming and cultivation also keep people moving with moderate efforts that do not overload the body but ensure a constant physical routine. This combination of varied movements, exposed to the outdoors and with breaks to rest, promotes an ideal balance between effort and recovery, contributing to an active, independent, and vibrant old age.",
        },
      ],
    },
  };

const Exercise = () => {
  const [activeModal, setActiveModal] = useState(null);

  const { language } = useLanguage();
  const t = translations[language];
 
  const openModal = (modal) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="bg-gradient-to-br from-sky-950 to-purple-200/80 min-h-screen p-6 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto mt-20">
        <h1 className="text-5xl font-extrabold text-center pb-4 bg-gradient-to-r from-green-500 via-blue-500 to-purple-300 bg-clip-text text-transparent">
          {t.title}
        </h1>

        <BackButton />

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center mb-16 mt-3">
          <Image
            src="/images/ejercicio.webp"
            alt="Actividad física"
            width={500}
            height={500}
            className="w-full md:w-1/2 rounded-xl shadow-xl hover:scale-105 transition-transform duration-500 transform hover:-rotate-2"
          />
          <div className="mt-6 md:mt-0 md:ml-10 text-center md:text-left">
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              {t.description}
            </p>
            <button
              className="bg-green-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
              onClick={() => openModal("main")}
            >
              {t.discoverButton}
            </button>
          </div>
        </div>

        {/* Modal Principal */}
        {activeModal === "main" && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-dark-bg rounded-lg p-8 shadow-2xl w-11/12 md:w-1/2 max-h-screen overflow-auto">
              <h2 className="text-lg font-bold text-green-700 dark:text-green-500  mb-2">
                {t.modal.header1}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {t.modal.paragraph1}
              </p>
              <h2 className="text-lg font-bold text-green-700 dark:text-green-500 mb-2">
                {t.modal.header2}
              </h2>
              <p className="text-gray-700 dark:text-gray-300  mb-2">
                {t.modal.paragraph2}
              </p>
              <h2 className="text-lg font-bold text-green-700 dark:text-green-500 mb-2">
                {t.modal.header3}
              </h2>
              <p className="text-gray-700 dark:text-gray-300  mb-4">
                {t.modal.paragraph3}
              </p>
              <h2 className="text-lg font-bold text-green-700 dark:text-green-500 mb-2">
                {t.modal.header4}
              </h2>
              <p className="text-gray-700 dark:text-gray-300  mb-4">
                {t.modal.paragraph4}
              </p>
              <button
                className="bg-red-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-red-600 transition-colors duration-300"
                onClick={closeModal}
              >
                {t.modal.closeButton}
              </button>
            </div>
          </div>
        )}

        {/* Lista de ejercicios */}
        <h2 className="text-4xl font-bold text-blue-950/90 dark:text-blue-100 text-center mb-10">
          {t.exerciseTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.exercises.map((exercise, idx) => (
            <div
              key={idx}
              className="bg-zinc-200 rounded-lg p-8 shadow-xl text-center hover:bg-green-50 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                {exercise.title}
              </h3>
              <p className="text-gray-600 text-lg mb-6">{exercise.description}</p>
              <button
                className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600 transition-colors duration-300"
                onClick={() => openModal(idx)}
              >
                {t.discoverButton}
              </button>

              {/* Modales individuales */}
              {activeModal === idx && (
                <div className="absolute inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="absolute bg-slate-100 dark:bg-slate-500 rounded-lg p-12 shadow-2xl w-[80%] sm:w-[100%] md:w-[100%] lg:w-[100%] max-h-[85vh] overflow-auto">
                    <h2 className="text-4xl font-bold text-green-700 dark:text-green-500 mb-6 text-center">
                      {exercise.title}
                    </h2>
                    <p className="text-start text-pretty text-lg text-gray-700 dark:text-stone-200 mb-6 leading-relaxed">
                      {exercise.details}
                    </p>
                    <button
                      className="bg-red-500 text-white px-8 py-4 rounded-full shadow-md hover:bg-red-600 transition-colors duration-300 mx-auto block"
                      onClick={closeModal}
                    >
                      {t.modal.closeButton}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercise;
