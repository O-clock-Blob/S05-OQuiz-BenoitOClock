const CoreModel = require("./coreModel");

class User extends CoreModel {
  email;
  password;
  firstname;
  lastname;

  static tableName = "user";

  constructor(obj) {
    super(obj);

    console.log(obj.email)

    if (typeof obj.email !== "string") {
      throw new Error("User.email must be a string");
    }
    this.email = obj.email;

    if (typeof obj.password !== "string") {
      throw new Error("User.password must be a string");
    }
    this.password = obj.password;

    if (typeof obj.firstname !== "string") {
      throw new Error("User.firstname must be a string");
    }
    this.firstname = obj.firstname;

    if (typeof obj.lastname !== "string") {
      throw new Error("User.lastname must be a string");
    }
    this.lastname = obj.lastname;
  }

  get fullname() {
    return this.firstname + " " + this.lastname;
  }

}

module.exports = User;
