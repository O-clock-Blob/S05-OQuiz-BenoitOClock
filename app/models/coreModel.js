class CoreModel {
  #id;
  created_at;
  updated_at;

  constructor(obj) {
    if (isNaN(parseInt(obj.id, 10))) {
      throw new Error("CoreModel.id must be an integer");
    }
    this.#id = obj.id;
    this.created_at = obj.created_at;
    this.updated_at = obj.updated_at;
  }

  get id(){
    return this.#id;
  }
}

module.exports = CoreModel;
