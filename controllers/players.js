const AWS = require('aws-sdk');
AWS.config.update({
    region: 'us-east-2',
    accessKeyId: 'AKIARZTLFSWHXNNHA6MS',
    secretAccessKey: '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',
  });
const dynamodb = new AWS.DynamoDB.DocumentClient();

const tabla = 'jugadores';

async function crearPlayer(req, res) {
    try {
        const { pk_ced, nombre, apellido, semestre, f_nacimiento, fk_idequ } = req.body;
        const nuevoJugador = {
            pk_ced,
            nombre,
            apellido,
            semestre,
            f_nacimiento,
            fk_idequ,
        };
        
        const params = {
            TableName: tabla,
            Item: nuevoJugador,
        };

        await dynamodb.put(params).promise();
        return res.status(200).json({ mensaje: 'Jugador creado con éxito', jugador: nuevoJugador });
    } catch (error) {
        return res.status(500).json({ error: "Error interno del servidor " + error });

    }
}


module.exports = {
    crearPlayer
};