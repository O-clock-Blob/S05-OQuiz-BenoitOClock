const express = require("express");
const mainController = require("./controllers/mainController");
const quizController = require("./controllers/quizController");
const tagController = require("./controllers/tagController");
const userController = require("./controllers/userController");

const router = express.Router();

// page d'accueil
router.get("/", mainController.homePage);

// page quiz
router.get("/quiz/:id", quizController.quizPage);

// page tags
router.get("/tags", tagController.tagsPage);

// page quizzes par tag
router.get("/quizzes/tag/:id", quizController.quizzesByTag);

// page signup
router.get("/signup", userController.signupPage);
router.post("/signup", userController.signup);

//page login
router.get("/login", userController.loginPage);
router.post("/login", userController.login)

module.exports = router;
