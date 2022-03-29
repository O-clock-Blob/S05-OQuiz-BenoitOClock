const { User } = require("../models");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");

const userController = {
  signupPage: (req, res) => {
    res.render("signup");
  },
  signup: (req, res) => {
    // les vérifications à effectuer
    // 1: existence de l'utilisateur
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        return res.render("signup", { error: "Cet email est déjà utilisé" });
      }
      // 2: validité de l'email
      if (!emailValidator.validate(req.body.email)) {
        return res.render("signup", { error: "Cet email n'est pas valide" });
      }
      // 3: concordance des mots de passe
      if (req.body.password !== req.body.passwordConfirm) {
        return res.render("signup", {
          error: "Les mots de passe ne correspondent pas",
        });
      }
      // si tout est ok.....
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPassword,
      });
      newUser.save().then(() => {
        res.redirect("/login");
      });
    });
  },
  loginPage: (req, res) => {
    res.render("login");
  },
  login: (req, res) => {
    // on essaie de récupérer l'utilisateur possédant l'email transmit
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (!user) {
        return res.render("login", {
          error: "Aucun utilisateur ne correspond à cet email",
        });
      }
      // si l'utilisateur existe, je vérifie son mot de passe
      const validPassword = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.render("login", { error: "Mot de passe incorrect" });
      }

      req.session.user = user;

      // on supprime le mot de passe de cet objet
      delete req.session.user.password;
      res.redirect("/");
    });
  },
  profilePage: (req, res) => {
    if (!req.session.user) {
      return res.redirect("/login");
    }
    res.render("profile");
  },
  disconnect: (req, res) => {
    req.session.user = false;
    res.redirect("/");
  },
};

module.exports = userController;
