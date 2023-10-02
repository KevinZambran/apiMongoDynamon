const express = require('express');
const playersController = require('../controllers/players');
const router = express.Router();

router.post('/playerCreate', playersController.crearPlayer);

module.exports = router;