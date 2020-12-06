const express = require('express');
const router = express.Router();
const controller = require('../controllers/petsController');

router.get('/', controller.getAllPets);

module.exports = {
    getAllPets
}