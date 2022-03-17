const CoreModel = require("./coreModel");

class Quiz extends CoreModel {
  title;
  description;
  user_id;

  constructor(obj) {
    super(obj);
    if (typeof obj.title !== "string") {
      throw new Error("Quiz.title must be a string");
    }
    this.title = obj.title;

    if (typeof obj.description !== "string") {
      throw new Error("Quiz.description must be a string");
    }
    this.description = obj.description;

    if (isNaN(parseInt(obj.user_id, 10))) {
      throw new Error("Quiz.user_id must be an integer");
    }
    this.user_id = obj.user_id;
  }
}

module.exports = Quiz;
