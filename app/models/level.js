const CoreModel = require("./coreModel");
const client = require("../database");

class Level extends CoreModel {
  name;

  constructor(obj) {
    super(obj);
    if (typeof obj.name !== "string") {
      throw new Error("Level.name mist be a string");
    }
    this.name = obj.name;
  }

  static findAll(callback) {
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
  }

  static async findById(id, callback) {
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
  }
}

module.exports = Level;
