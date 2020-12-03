const express = require('express');
const router = express.Router();
const controller = require('../controllers/anjosController');

router.get('/', controller.readAll);
router.get('/user', controller.readAngelByName);
router.post('/', controller.createAngel);
router.put('/user', controller.updateAngel);
router.delete('/', controller.deleteAngel);

module.exports = router;