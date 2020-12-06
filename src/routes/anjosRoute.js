const express = require('express');
const router = express.Router();
const controller = require('../controllers/anjosController');

router.get('/', controller.getAllAngels);
router.get('/user', controller.getAngelByName);
router.post('/', controller.createAngel);
router.put('/user', controller.updateAngel);
router.delete('/user', controller.deleteAngel);

module.exports = router;