const client = require("../database");

class CoreModel {
  #id;
  created_at;
  updated_at;

  // afin de pouvoir gérer les accès à la base de données
  // pour tout nos modéles, on a besoin de savoir à quelle table
  // ils sont reliés. On va stocker le nom de cette table dans une prop
  // statique de coreModel dont hérite TOUT nos modéles

  static tableName = null;

  constructor(obj) {
    if (obj.hasOwnProperty("id")) {
      if (isNaN(parseInt(obj.id, 10))) {
        throw new Error("CoreModel.id must be an integer");
      } else {
        this.#id = obj.id;
      }
    }
    this.created_at = obj.created_at;
    this.updated_at = obj.updated_at;
  }

  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  /* Méthodes active record */

  static findAll(callback) {
    const query = `SELECT * FROM "${this.tableName}"`;
    client.query(query, (err, results) => {
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
        const items = [];
        for (const obj of results.rows) {
          items.push(new this(obj));
        }
        callback(null, items);
      }
    });
  }

  static async findById(id, callback) {
    const query = {
      text: `SELECT * FROM "${this.tableName}" WHERE id=$1`,
      values: [id],
    };
    try {
      const results = await client.query(query);
      if (!results.rowCount) {
        return callback(null, null);
      }
      const item = new this(results.rows[0]);
      callback(null, item);
    } catch (error) {
      callback(error, null);
    }
  }

  static findBy(obj, callback){

    const conditions = [];
    const values = [];
    let placeHoldersIndex = 1;
    for(let property in obj){
      // "email=$1"
      conditions.push(`"${property}"=$${placeHoldersIndex}`);
      values.push(obj[property])
      placeHoldersIndex++
    }

    const query ={
      text: `SELECT * FROM "${this.tableName}"
      WHERE ${conditions.join(" AND ")}`,
      values
    }

    console.log(query.text)

    client.query(query,(err, results)=>{
      // cas 1: une erreur est survenue => lon la passe à la fonction
      // callback
      if (err) {
        return callback(err, null);
      }
      if(!results.rowCount){
        return callback(null, []);
      }
      const items = [];
      for(const result of results.rows){
        console.log(result)
        items.push(new this(result))
      }
      callback(null, items)
    })

  }

  insert(callback) {
    // On souhaite insérer n'importe quelle instance d'un modele dans notre db
    // mais nos différents modéles n'ont pas les mêmes prorpriétés (champs).
    // on va don,c récupérer les propriétés de notre instance de façon dynamique

    const properties = Object.keys(this);
    properties.splice(properties.indexOf("created_at"), 1);
    const fields = [];
    const values = [];
    const placeholders = [];

    let placeHoldeIndex = 1;

    for (let property of properties) {
      fields.push(`"${property}"`);
      values.push(this[property]);
      placeholders.push("$" + placeHoldeIndex);
      placeHoldeIndex++;
    }

    const query = {
      text: `
        INSERT INTO "${this.constructor.tableName}"
        (${fields})
        VALUES(${placeholders})
        RETURNING "id", "created_at"
      `,
      values,
    };

    client.query(query, (err, result) => {
      // cas 1 : une erreyr est survenue
      if (err) {
        return callback(err, null);
      }
      // cas 2 : aucun id n'a été renvoyé
      if (!result.rowCount) {
        return callback(new Error("Insert didn't return any id"), null);
      }
      this.id = result.rows[0].id;
      this.created_at = result.rows[0].created_at;
      callback(null, this);
    });
  }

  update(callback) {
    // on crée un tableau contenant les clefs des propriété de l'objet
    // que l'on va mettre à jour
    const properties = Object.keys(this);
    //par exemple pour une instance de User je récupére un tableau
    // ["email","password","firstname","lastname"]

    const sets = [];
    const values = [];
    let placeHoldersIndex = 1;

    for (const property of properties) {
      //"email"=$1, "password=$2..."
      sets.push(`"${property}"=$${placeHoldersIndex}`); 
      // nibelune@gmail.com, lkzjgflksjghdk, ...
      // this[property] permet d'accéder dynamiquement aux valeurs des propriétés de this
      // par exmeple si property contient la chaine "email" this[property] permettra d'accéder à this["email"]
      // qui est la même chose de this.email
      values.push(this[property]);
      placeHoldersIndex++;
    }

    values.push(this.id)

    const query = {
      text: `
        UPDATE "${this.constructor.tableName}" SET
        ${sets}
        WHERE "id"=$${placeHoldersIndex}
        RETURNING "id", "updated_at"
      `,
      values
    };

    client.query(query, (err, result) => {
      // cas 1 : une erreyr est survenue
      if (err) {
        return callback(err, null);
      }
      // cas 2 : aucun id n'a été renvoyé
      if (!result.rowCount) {
        return callback(new Error("Update didn't target any row"), null);
      }
      this.updated_at = result.rows[0].updated_at;
      callback(null, this);
    });
  }

  delete(callback) {
    const query = {
      text: `DELETE FROM "${this.constructor.tableName}" WHERE "id"=$1`,
      values: [this.id],
    };
    client.query(query, (err, result) => {
      // cas 1 : une erreyr est survenue
      if (err) {
        return callback(err, null);
      }
      // cas 2 : aucune row n'a été éffacée
      if (!result.rowCount) {
        return callback(new Error("Delete didn't target any row"), null);
      }
      callback(null, true);
    });
  }

  save(callback){
    // pour vérfier qu'une instance existe déjà en base, il suffit de vérifier
    // si cette dernière à déjà un id.
    // si elle n'en a pas, il faut utiliser insert, sinon update
    if(this.id){
      return this.update(callback)
    } else {
      return this.insert(callback)
    }
  }
}

module.exports = CoreModel;
