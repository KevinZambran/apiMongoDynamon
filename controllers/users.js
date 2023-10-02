const Users = require("../models/users");
const bcrypt = require('bcrypt');

async function crearUser(req, res) {
    try {
        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, 10);
        const nuevoUser = await Users.create({ ...req.body, password: hashedPassword });

        if (!nuevoUser) {
            return res.status(400).json({ error: "No se pudo crear el usuario" });
        }

        return res.status(200).json(nuevoUser);
    } catch (error) {
        return res.status(500).json({ error: "Error interno del servidor " + error });

    }
}


module.exports = {
    crearUser
};
