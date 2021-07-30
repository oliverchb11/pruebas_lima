// Path: /api/v1/limaBack/solicitudes-tarjeta
const express = require('express');
const router = express.Router();
const aceptadaController = require('../controllers/solicitud-aceptada.controller')
router.get('/', aceptadaController.get);
router.post('/', aceptadaController.post);


module.exports = router;