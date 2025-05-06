const express = require('express');
const CRutas = require('../controlador/AdministradorControlador');
const router = express.Router();

router.post('/administradores', CRutas.crearAdministrador);
router.get('/administradores/:val', CRutas.autenticarAdministrador);
router.get('/administradores/:rec', CRutas.recuperarAdministrador);
router.get('/administradores/:con', CRutas.recuperarClave);
router.put('/administradores/:mod', CRutas.modificarPerfil);

module.exports = router;