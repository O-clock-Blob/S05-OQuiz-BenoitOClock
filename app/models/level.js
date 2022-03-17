const CoreModel = require("./coreModel");

class Level extends CoreModel {
  name;

  constructor(obj) {
    super(obj);
    if (typeof obj.name !== "string") {
      throw new Error("Level.name mist be a string");
    }
    this.name = obj.name;
  }
}

module.exports = Level;
