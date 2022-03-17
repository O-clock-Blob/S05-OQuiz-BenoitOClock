const client = require("./database");
const Level = require("./models/level");

const dataMapper = {
  getAllLevels(callback) {
    // ce n'est pas exactement ce que l'on souhaite.
    // nous voulons récypérer des instance de la classe Level
    // pas les résulats bruts de notre requête

    //client.query('SELECT * FROM level', callback);

    // on améliore ça en instanciant la classe level
    // pour chaque enregstrement dans notre table level
    client.query("SELECT * FROM level", (err, results) => {
      // cas 1: une erreur est survenue => lon la passe à la fonction
      // callback
      if (err) {
        return callback(err, null);
      }

      // cas 2: pas d'eerur, mais pas de résultat
      if (!results.rowCount) {
        return callback(null, []);
      } else {
        //cas 3: tout est ok, et jon a bien reçu des données
        const levels = [];
        for (const obj of results.rows) {
          levels.push(new Level(obj));
        }
        callback(null, levels);
      }
    });
  },
  async getOneLevel(id, callback) {
    const query = {
      text: `SELECT * FROM "level" WHERE id=$1`,
      values: [id],
    };
    try {
      const results = await client.query(query);
      if (!results.rowCount) {
        return callback(null, null);
      } else {
        const level = new Level(results.rows[0]);
        callback(null, level);
      }
    } catch (error) {
      return callback(error, null);
    }
  },
};

module.exports = dataMapper;