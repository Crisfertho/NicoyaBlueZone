import { useLanguage } from "../context/LanguageContext";

const BackButton = () => {

const { language } = useLanguage();


  return (
    /* Botón de regreso */
    <button
    onClick={() => window.history.back()}
    className="relative t-4 l-4 bg-slate-500 text-white py-2 px-4 rounded-full hover:bg-slate-300 hover:text-black flex items-center"
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19l-7-7 7-7"
      />
    </svg>
    {language === "es" ? "Regresar" : "Back"}
    </button>
  );
};

export default BackButton;