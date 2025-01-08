import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    title: "Calculadora de Longevidad",
    description:
      "Calculadora que hace una predicción de la edad a la cual puedes llegar a vivir dependiendo de ciertos aspectos que identifican a las personas que habitan estas zonas. A continuación, se le harán unas preguntas para calcular la edad:",
    questions: {
      age: "¿Cuál es tu edad actual?",
      exercise: "¿Cuántas horas de ejercicio haces por semana?",
      fruitsVeg: "¿Con qué frecuencia comes frutas y verduras?",
      junkFood: "¿Con qué frecuencia comes comida chatarra?",
      smokesDrinks: "¿Fumas o bebes?",
      sleep: "¿Duermes MENOS de 8 horas?",
    },
    options: {
      poco: "Poco",
      medio: "Medio",
      mucho: "Mucho",
      si: "Sí",
      no: "No",
      select: "Selecciona una opción",
    },
    buttons: {
      calculate: "Calcular",
      clear: "Limpiar",
    },
    result: {
      score: "Tu puntuación de longevidad es:",
      advice:
        "¡Sigue estos consejos para mejorar tu calidad de vida!",
      disclaimer:
        "El resultado de dicho cálculo está basado en sus respuestas y respecto a su edad. No es un cálculo de predicción exacta, por ende recomendamos mantener la actividad física y una dieta balanceada para tener una vida más saludable conforme pasen los años.",
    },
  },
  en: {
    title: "Longevity Calculator",
    description:
      "This calculator predicts the age you might live to based on certain aspects common to people living in these zones. Answer the following questions to calculate your longevity:",
    questions: {
      age: "What is your current age?",
      exercise: "How many hours of exercise do you do per week?",
      fruitsVeg: "How often do you eat fruits and vegetables?",
      junkFood: "How often do you eat junk food?",
      smokesDrinks: "Do you smoke or drink?",
      sleep: "Do you sleep LESS than 8 hours?",
    },
    options: {
      poco: "Little",
      medio: "Moderate",
      mucho: "A lot",
      si: "Yes",
      no: "No",
      select: "Select an option",
    },
    buttons: {
      calculate: "Calculate",
      clear: "Clear",
    },
    result: {
      score: "Your longevity score is:",
      advice: "Follow these tips to improve your quality of life!",
      disclaimer:
        "This calculation is based on your answers and your age. It is not an exact prediction, so we recommend maintaining physical activity and a balanced diet to live a healthier life as the years go by.",
    },
  },
};

const LongevityCalculator = () => {
  const [score, setScore] = useState(null);
  const [ages, setAges] = useState("");
  const { language } = useLanguage();
  const t = translations[language];

  const calculateLongevity = (event) => {
    event.preventDefault();
    const age = parseInt(event.target[0].value);
    const exerciseHours = parseInt(event.target[1].value);
    const fruitVegIntake = event.target[2].value;
    const junkFoodIntake = event.target[3].value;
    const smokesDrinks = event.target[4].value;
    const sleeps = event.target[5].value.toLowerCase();

    if (isNaN(age) || age <= 0) {
      alert(language === "es" ? "Por favor, introduce una edad válida." : "Please enter a valid age.");
      return;
    }

    let estimatedLongevity = age;

    if (!isNaN(exerciseHours)) {
      if (exerciseHours >= 7) {
        estimatedLongevity += 6;
      } else if (exerciseHours >= 3) {
        estimatedLongevity += 3;
      } else {
        estimatedLongevity -= 2;
      }
    }

    if (fruitVegIntake === "mucho") {
      estimatedLongevity += 5;
    } else if (fruitVegIntake === "medio") {
      estimatedLongevity += 3;
    } else if (fruitVegIntake === "poco") {
      estimatedLongevity -= 1;
    }

    if (junkFoodIntake === "poco") {
      estimatedLongevity += 4;
    } else if (junkFoodIntake === "medio") {
      estimatedLongevity += 2;
    } else {
      estimatedLongevity -= 5;
    }

    if (smokesDrinks === "no") {
      estimatedLongevity += 5;
    } else {
      estimatedLongevity -= 5;
    }

    if (sleeps === "sí" || sleeps === "si") {
      estimatedLongevity -= 3;
    } else {
      estimatedLongevity += 3;
    }

    setScore(estimatedLongevity);
  };

  const clearForm = (event) => {
    event.target.form.reset();
    setAges("");
    setScore(null);
  };

  return (
    <section className="container mx-auto my-28 border-t-2" id="calc">
      <h2 className="text-2xl md:text-4xl font-extrabold text-center pt-6 m-8 text-lime-900 dark:text-lime-100/90">
        {t.title}
      </h2>
      <div className="px-3 rounded-lg overflow-hidden shadow-lg shadow-green-600 mt-12">
        <p className="text-sm md:text-lg mb-4">{t.description}</p>
        <form
          onSubmit={calculateLongevity}
          className="flex flex-col items-center space-y-4"
        >
          <div className="w-1/2">
            <label className="block">{t.questions.age}</label>
            <input
              type="number"
              placeholder={t.questions.age}
              className="border p-2 rounded w-full bg-slate-500/40"
              value={ages}
              onChange={(e) => setAges(e.target.value)}
              min="20"
              max="65"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block">{t.questions.exercise}</label>
            <input
              type="number"
              placeholder={t.questions.exercise}
              className="border p-2 rounded w-full bg-slate-500/40"
              min="0"
            />
          </div>
          <div className="w-1/2">
            <label className="block">{t.questions.fruitsVeg}</label>
            <select className="border p-2 rounded w-full bg-slate-500/40">
              <option value="">{t.options.select}</option>
              <option value="poco">{t.options.poco}</option>
              <option value="medio">{t.options.medio}</option>
              <option value="mucho">{t.options.mucho}</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block">{t.questions.junkFood}</label>
            <select className="border p-2 rounded w-full bg-slate-500/40">
              <option value="">{t.options.select}</option>
              <option value="poco">{t.options.poco}</option>
              <option value="medio">{t.options.medio}</option>
              <option value="mucho">{t.options.mucho}</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block">{t.questions.smokesDrinks}</label>
            <select className="border p-2 rounded w-full bg-slate-500/40">
              <option value="">{t.options.select}</option>
              <option value="si">{t.options.si}</option>
              <option value="no">{t.options.no}</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="block">{t.questions.sleep}</label>
            <select className="border p-2 rounded w-full bg-slate-500/40">
              <option value="">{t.options.select}</option>
              <option value="si">{t.options.si}</option>
              <option value="no">{t.options.no}</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
            >
              {t.buttons.calculate}
            </button>
            <button
              type="button"
              onClick={clearForm}
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
            >
              {t.buttons.clear}
            </button>
          </div>
        </form>
        <p className="my-2 lg:px-36 text-wrap text-sm md:text-base">
          {t.result.disclaimer}
        </p>
      </div>
      {score !== null && (
        <div className="mt-8 text-center">
          <h3 className="text-2xl">
            {t.result.score}{" "}
            {score +
              (ages < 30
                ? 33
                : ages < 40
                ? 20
                : ages < 50
                ? 15
                : ages < 60
                ? 5
                : 0)}
          </h3>
          <p className="text-gray-700">{t.result.advice}</p>
        </div>
      )}
    </section>
  );
};

export default LongevityCalculator;
