const CoreModel = require("./coreModel");

class Tag extends CoreModel {
  name;

  constructor(obj) {
    super(obj);

    if (typeof obj.name !== "string") {
      throw new Error("Tag.name must be a string");
    }
    this.name = obj.name;
  }
}

module.exports = Tag;
