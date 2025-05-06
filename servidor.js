const express = require('express');
const cors = require('cors');
const rutacliente = require('./vista/ClienteRutas');
const rutaadministrador = require('./vista/AdministradorRutas');
const rutacalendario = require('./vista/CalendarioRutas');
const rutaevento = require('./vista/EventoRutas');
//const path = require('path');
const app = express();
const PORT = process.env.PORT || 3434;

// Middleware
app.use(cors({
    origin: '*', // Cambiar ['http://tu.com', 'http://yo.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
    credentials: true // Habilita el envío de credenciales si es necesario
  }));

  // Middleware para parseo de solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rutacliente);
app.use('/a', rutaadministrador);
app.use('/ca', rutacalendario);
app.use('/e', rutaevento);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });