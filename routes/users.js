const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();

router.post('/userCreate', usersController.crearUser);

module.exports = router;