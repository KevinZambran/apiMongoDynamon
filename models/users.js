var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Users = new Schema({
    name: String,
    lastname: String,
    email: String,
    phone: Number,
    rol: String,
    password: String
});

module.exports = mongoose.model('users', Users);
