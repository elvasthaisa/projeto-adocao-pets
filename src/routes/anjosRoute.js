const express = require('express');
const router = express.Router();
const controller = require('../controllers/anjosController');

router.get('/', controller.readAll);
router.post('/', controller.createAngel);

module.exports = router;