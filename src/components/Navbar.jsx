import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaBook, FaMapMarkerAlt, FaCalculator, FaPhone } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { language, toggleLanguage } = useLanguage();

  let closeMenuTimeout;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      // Si el menú se abre, configura un temporizador para cerrarlo
      closeMenuTimeout = setTimeout(() => {
        setMenuOpen(false);
      }, 7000);
    } else {
      // Limpia el temporizador si el menú se cierra manualmente
      clearTimeout(closeMenuTimeout);
    }
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const MenuItem = ({ href, icon, children }) => (
    <Link
      href={href}
      className={`relative group flex items-center gap-2 transition-colors duration-300 ${
        activeSection === href.replace("/#", "") ? "text-yellow-400" : ""
      }`}
    >
      {icon}
      {children}
      <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );

  return (
    <nav className="fixed bg-gradient-to-r from-cyan-950 to-neutral-950/90 text-white p-4 top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold flex items-center gap-4">
          <div style={{ width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden" }}>
            <img
              src="/images/logoNicoyaBZ.webp"
              alt="Logo Nicoya Zona Azul"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <a href="./" className="hover:text-amber-300 hover:scale-105 hover:text-2xl transition-transform duration-300">
            {language === "es" ? "Nicoya Zona Azul" : "Nicoya Blue Zone"}
          </a>
        </div>

        <div className="hidden lg:flex space-x-5 text-base">
          <MenuItem href="/#inicio" icon={<FaHome />}>
            {language === "es" ? "Inicio" : "Home"}
          </MenuItem>
          <MenuItem href="/#longevity" icon={<FaBook />}>
            {language === "es" ? "Secretos de la Longevidad" : "Longevity Secrets"}
          </MenuItem>
          <MenuItem href="/#culture" icon={<FaMapMarkerAlt />}>
            {language === "es" ? "Cultura y Tradiciones" : "Culture and Traditions"}
          </MenuItem>
          <MenuItem href="/#tourist" icon={<FaMapMarkerAlt />}>
            {language === "es" ? "Guía Turística" : "Tourist Guide"}
          </MenuItem>
          <MenuItem href="/#calc" icon={<FaCalculator />}>
            {language === "es" ? "Calcula tu Longevidad" : "Longevity Calculator"}
          </MenuItem>
          <MenuItem href="/#contact" icon={<FaPhone />}>
            {language === "es" ? "Contáctanos" : "Contact Us"}
          </MenuItem>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-white text-3xl focus:outline-none"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
          <button
            onClick={toggleDarkMode}
            className={`py-1 px-2 text-sm font-semibold rounded-xl transition-transform duration-300 ${
              isDarkMode ? "bg-gray-600 text-white hover:bg-gray-700" : "bg-gray-400 text-black hover:bg-gray-300"
            }`}
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
          <button
            onClick={toggleLanguage}
            className="py-1 px-2 text-sm font-semibold rounded-xl bg-gray-400 text-black hover:bg-gray-300 transition-transform"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden bg-cyan-950/95 absolute w-full left-0 top-full shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <MenuItem href="/#inicio" icon={<FaHome />}>
                {language === "es" ? "Inicio" : "Home"}
              </MenuItem>
            </li>
            <li>
              <MenuItem href="/#longevity" icon={<FaBook />}>
                {language === "es" ? "Secretos de la Longevidad" : "Longevity Secrets"}
              </MenuItem>
            </li>
            <li>
              <MenuItem href="/#culture" icon={<FaMapMarkerAlt />}>
                {language === "es" ? "Cultura y Tradiciones" : "Culture and Traditions"}
              </MenuItem>
            </li>
            <li>
              <MenuItem href="/#tourist" icon={<FaMapMarkerAlt />}>
                {language === "es" ? "Guía Turística" : "Tourist Guide"}
              </MenuItem>
            </li>
            <li>
              <MenuItem href="/#calc" icon={<FaCalculator />}>
                {language === "es" ? "Calcula tu Longevidad" : "Longevity Calculator"}
              </MenuItem>
            </li>
            <li>
              <MenuItem href="/#contact" icon={<FaPhone />}>
                {language === "es" ? "Contáctanos" : "Contact Us"}
              </MenuItem>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
