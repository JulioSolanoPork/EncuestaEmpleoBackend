const { Router } = require('express');

const router = Router();

const { obtenerDatos, guardarRegistroExp, guardarRegistroOtr } = require('../controllers/google.controller');

router.get('/datos/datos/infinito', obtenerDatos);

router.post('/', guardarRegistroExp);

router.post('/otros', guardarRegistroOtr);

module.exports = router;