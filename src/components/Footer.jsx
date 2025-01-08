import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    create: "Nicoya Zona Azul por FerthoWeb.",
    copyright: "Todos los derechos reservados.",
    followUs: "Síguenos en:",
  },
  en: {
    create: "Nicoya Blue Zone by FerthoWeb.",
    copyright: "All rights reserved.",
    followUs: "Follow us on:",
  },
};

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Texto del footer */}
        <p className="text-center md:text-left mb-4 md:mb-0 text-sm">
          © {new Date().getFullYear()} {t.create} {t.copyright}
        </p>

        {/* Redes sociales */}
        <div className="flex justify-center md:justify-end space-x-6">
          <p className="hidden md:block text-sm">{t.followUs}</p>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="mailto:ferthoweb@gmail.com"
            className="text-gray-400 hover:text-red-500 transition duration-300"
            aria-label="Correo electrónico"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://wa.me/50660865218"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
