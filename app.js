var express = require('express');
const cors = require('cors');

var app = express();

//cargar ruta
var users = require('./routes/users');
var players = require('./routes/players');
app.use(cors());
app.use(express.urlencoded ({extended: false}));
app.use(express.json());

//rutabase
app.use('/api', users);
app.use('/api', players);

module.exports = app; 
