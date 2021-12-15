const express = require('express');
const router = express.Router();
const { navigationController } = require('../controller')
router.get('/',navigationController.getHome)
router.get('/actualizar/:id', navigationController.getActualizar)
router.post('/',navigationController.crearAlumno)
router.put('/:id',navigationController.actualizarAlumnos)
router.get('/borrar/:id',navigationController.borrarAlumno)
module.exports = router;