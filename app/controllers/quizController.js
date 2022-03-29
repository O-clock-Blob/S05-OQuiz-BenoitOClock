const { Quiz, Tag } = require("../models");

const quizController = {
  quizPage: (req, res) => {
    const quizId = req.params.id;
    Quiz.findByPk(quizId, {
      include: [
        { association: "author" },
        { association: "questions", include: ["level", "answers"] },
        { association: "tags" },
      ],
    }).then((quiz) => {
      res.render("quiz", { quiz });
    });
  },
  quizzesByTag: (req, res) => {
    const tagId = parseInt(req.params.id);
    Tag.findByPk(tagId, {
      include: [
        {
          association: "quizList",
          include: ["author"],
        },
      ],
    }).then((tag) => {
      res.render("tag", { tag });
    });
  },
};

module.exports = quizController;
