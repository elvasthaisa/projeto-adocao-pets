const express = require('express');
const router = express.Router();
const controller = require('../controllers/anjosController');

router.post('/', controller.createAngel);
router.post('/login', controller.loginAngel);
router.get('/', controller.getAllAngels);
router.get('/user', controller.getAngelByName);
router.get('/user/type', controller.getAngelByPetType);
router.put('/user', controller.updateAngel);
router.delete('/user', controller.deleteAngel);

module.exports = router;