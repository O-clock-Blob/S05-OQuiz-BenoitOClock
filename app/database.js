// on récupére le module pg
const { Client } = require('pg');

// on crée une instance de la classe Client en lui passant l'url de connexion
const client = new Client(process.env.PG_URL);

// on connect l'instance du client à la base de données
client.connect();

// on export le client
module.exports = client;