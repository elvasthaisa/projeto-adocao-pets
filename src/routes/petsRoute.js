const express = require('express');
const router = express.Router();
const controller = require('../controllers/petsController');

router.post('/', controller.createPet);
router.post('/login', controller.loginPet);
router.get('/', controller.getAllPets);
router.get('/user', controller.getPetByName);
router.get('/user/sex', controller.getPetBySex);
router.get('/user/size', controller.getPetBySize);
router.get('/user/type', controller.getPetByType);
router.put('/user', controller.updatePet);
router.delete('/user', controller.deletePet);

module.exports = router;