const express = require('express');
const router = express.Router();
const controller = require('../controllers/petsController');

router.get('/', controller.getAllPets);
router.get('/user', controller.getPetByName);
router.post('/', controller.createPet);
router.put('/user', controller.updatePet);

module.exports = router;