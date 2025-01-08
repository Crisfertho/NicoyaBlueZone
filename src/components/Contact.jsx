import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  es: {
    title: "Contáctanos",
    fields: {
      name: "Nombre",
      tel: "Teléfono",
      email: "Correo Electrónico",
      message: "Mensaje",
    },
    placeholders: {
      name: "Ingresa tu nombre",
      tel: "Ingresa tu teléfono (opcional)",
      email: "Ingresa tu correo electrónico",
      message: "Escribe tu mensaje (mínimo 15 palabras)",
    },
    buttons: {
      submit: "Enviar",
      close: "Cerrar",
    },
    modal: {
      success: "Mensaje enviado con éxito.",
      thanks: "Muchas Gracias.",
      error: "Hubo algunos errores con tu solicitud.",
      retry: "Por favor inténtalo de nuevo.",
    },
    donation: {
      title: "¡Apóyanos con una Donación!",
      description:
        "Tu contribución nos ayuda a mantener y mejorar este sitio web. Deja tu correo o mensaje al donar también podemos coordinar menciones publicitarias.",
      button: "Donar con Paypal",
    },
  },
  en: {
    title: "Contact Us",
    fields: {
      name: "Name",
      tel: "Phone",
      email: "Email",
      message: "Message",
    },
    placeholders: {
      name: "Enter your name",
      tel: "Enter your phone number (optional)",
      email: "Enter your email address",
      message: "Write your message (at least 15 words)",
    },
    buttons: {
      submit: "Send",
      close: "Close",
    },
    modal: {
      success: "Message sent successfully.",
      thanks: "Thank You.",
      error: "There were some errors with your request.",
      retry: "Please try again.",
    },
    donation: {
      title: "Support Us with a Donation!",
      description:
        "Your contribution helps us maintain and improve this website. Leave your email or message when donating, and we can also coordinate advertising mentions.",
      button: "Donate with Paypal",
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          const errorObj = {};
          data.errors.forEach((err, index) => {
            errorObj[`error${index}`] = err;
          });
          setErrors(errorObj);
        } else {
          setErrors({ general: data.error || "Something went wrong." });
        }
      } else {
        setFormData({ name: "", tel: "", email: "", message: "" });
        setSuccessMessage(t.modal.success);
      }
    } catch {
      setErrors({ general: "Error connecting to the server." });
    }

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            {successMessage ? (
              <div>
                <p className="text-green-600 text-center font-bold mb-4">
                  {successMessage}
                </p>
                <p className="text-green-600 text-center text-xl font-bold m-2">
                  {t.modal.thanks}
                </p>
              </div>
            ) : (
              <div>
                <p className="text-red-600 text-center font-bold mb-4">
                  {errors.general || t.modal.error}
                </p>
                <ul className="text-red-600 text-xl font-bold flex justify-center">
                  <li>{t.modal.retry}</li>
                </ul>
              </div>
            )}
            <button
              onClick={closeModal}
              className="block mx-auto bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-blue-700"
            >
              {t.buttons.close}
            </button>
          </div>
        </div>
      )}

      {/* Formulario */}
      <section
        className="m-3 mt-6 text-center border-t border-gray-700 pt-6"
        id="contact"
      >
        <h3
          className="text-2xl font-bold mt-4 mb-4 flex justify-center cursor-pointer"
          onClick={toggleAccordion}
        >
          {t.title}
          <span
            className={`ml-2 transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </span>
        </h3>
        {isOpen && (
          <form
            className="w-2/3 mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            {Object.entries(t.fields).map(([key, label]) => (
              <div key={key} className="mb-4">
                <label
                  htmlFor={key}
                  className="block text-gray-600 dark:text-gray-300"
                >
                  {label}
                </label>
                <input
                  type={key === "message" ? "textarea" : "text"}
                  id={key}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  required={key !== "tel"}
                  className="w-full p-2 border border-gray-400 rounded bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder={t.placeholders[key]}
                />
              </div>
            ))}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 transition"
              >
                {t.buttons.submit}
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Sección de Donaciones */}
      <div className="mt-6 text-center border-t border-gray-700 pt-6">
        <h3 className="text-black dark:text-white font-bold text-lg mb-2">
          {t.donation.title}
        </h3>
        <p className="text dark:text-gray-400 text-sm mb-4">
          {t.donation.description}
        </p>
        <a
          href="https://paypal.me/FerthoWeb?country.x=CR&locale.x=en_US"
          target="_blank"
          className="inline-flex items-center gap-2 bg-emerald-600/90 text-white dark:bg-yellow-400/90 dark:text-gray-900 font-bold py-2 px-6 rounded hover:bg-yellow-500 transition"
        >
          <i className="fab fa-paypal"></i> {t.donation.button}
        </a>
      </div>
    </div>
  );
};

export default Contact;
