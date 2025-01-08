const express = require("express");
const cors = require("cors");
const sanitizeHtml = require("sanitize-html"); // Para sanitizar entradas
const validator = require("validator"); // Para validaciones avanzadas
require('dotenv').config();
const mysql = require("mysql2/promise");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a la base de datos MySQL
const db = mysql.createPool({
  host: process.env.DB_HOST, // Cambia por tu host de MySQL
  user: process.env.DB_USER, // Cambia por tu usuario de MySQL
  password: process.env.DB_PASS, // Cambia por tu contraseña de MySQL
  database: process.env.DB_NAME, // Cambia por el nombre de tu base de datos
});

module.exports = db;
// Función para validar y sanitizar entradas
const validateAndSanitizeInput = (data) => {
  const errors = [];

  // Validar y sanitizar nombre
  if (!data.name || validator.isEmpty(data.name)) {
    errors.push("El nombre es obligatorio.");
  } else {
    data.name = sanitizeHtml(data.name.trim());
    if (data.name.length > 50) {
      errors.push("El nombre no puede exceder los 50 caracteres.");
    }
  }

  // Validar y sanitizar teléfono (opcional)
  if (data.tel && !validator.isEmpty(data.tel)) {
    data.tel = sanitizeHtml(data.tel.trim());
    if (!/^[0-9]{8}$/.test(data.tel)) {
      errors.push("El número de teléfono debe tener exactamente 8 dígitos.");
    }
  } else {
    data.tel = null; // Si no se envía, se guarda como null
  }

  // Validar y sanitizar correo
  if (!data.email || validator.isEmpty(data.email)) {
    errors.push("El correo electrónico es obligatorio.");
  } else {
    data.email = sanitizeHtml(data.email.trim());
    if (!validator.isEmail(data.email)) {
      errors.push("El correo electrónico no es válido.");
    }
  }

  // Validar y sanitizar mensaje
  if (!data.message || validator.isEmpty(data.message)) {
    errors.push("El mensaje es obligatorio.");
  } else {
    data.message = sanitizeHtml(data.message.trim());
    if (data.message.length < 15) {
      errors.push("El mensaje debe contener al menos 15 caracteres.");
    }
  }

  return { sanitizedData: data, errors };
};

// Ruta para recibir mensajes
app.post("/api/contact", async (req, res) => {
  try {
    const { name, tel, email, message } = req.body;

    // Validar y sanitizar los datos
    const { sanitizedData, errors } = validateAndSanitizeInput({
      name,
      tel,
      email,
      message,
    });

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // Guardar en la base de datos
    const query = `
      INSERT INTO messages (name, tel, email, message)
      VALUES (?, ?, ?, ?)
    `;
    await db.query(query, [
      sanitizedData.name,
      sanitizedData.tel,
      sanitizedData.email,
      sanitizedData.message,
    ]);

    res.status(200).json({ message: "Mensaje enviado con éxito." });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    res.status(500).json({ error: "Error interno del servidor." });
  }
});

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
