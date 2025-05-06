const express = require('express');
const CRutas = require('../controlador/ClienteControlador');
const router = express.Router();

router.post('/usuarios', CRutas.crearCliente);
router.get('/usuarios/:val', CRutas.autenticarCliente);
router.get('/usuarios/:rec', CRutas.recuperarCliente);
router.get('/usuarios/:con', CRutas.recuperarClave);
router.put('/usuarios/:mod', CRutas.modificarPerfil);

module.exports = router;