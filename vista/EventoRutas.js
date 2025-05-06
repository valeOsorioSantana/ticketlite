const express = require('express');
const CRutas = require('../controlador/EventoControlador');
const router = express.Router();

router.post('/evento', CRutas.crearEvento);
router.get('/evento/:rec', CRutas.recuperarEvento);
router.put('/evento/:mod', CRutas.modificarEvento);

module.exports = router; 