const express = require('express');
const CRutas = require('../controlador/CalendarioControlador');
const router = express.Router();

router.post('/calendario', CRutas.crearCalendario);
router.get('/calendario/:rec', CRutas.recuperarCalendario);
router.put('/calendario/:mod', CRutas.modificarCalendario);

module.exports = router; 