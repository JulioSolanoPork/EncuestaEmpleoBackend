const { Router } = require('express');

const router = Router();

const { obtenerDatos, obtenerDepartamentos, guardarRegistroExp, guardarRegistroOtr } = require('../controllers/google.controller');

router.get('/datos', obtenerDatos);

router.get('/departamentos', obtenerDepartamentos);

router.post('/', guardarRegistroExp);

router.post('/otros', guardarRegistroOtr);

module.exports = router;