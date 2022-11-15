const express = require('express')
const animalController = require('../controllers/animal_controller')

const router = express.Router()

// GET /api/v1/animals
router.get('/', animalController.listAnimals)

// GET /api/v1/animals/:animalID
router.get('/:id', animalController.show)

router.post('/', animalController.createAnimal)

router.patch('/:id', animalController.updateAnimal)

router.delete('/:id', animalController.deleteAnimal)

module.exports = router
