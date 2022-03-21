const Answer = require("./answer");
const Level = require("./level");
const Question = require("./question");
const Quiz = require("./quiz");
const Tag = require("./tag");
const User = require("./user");

Question.hasMany(Answer, {
  foreignKey: "question_id",
  as: "answers",
});
Answer.belongsTo(Question, {
  foreignKey: "question_id",
  as: "question",
});

Question.belongsTo(Answer, {
  foreignKey: "answer_id",
  as: "goodAnswer",
});

Question.belongsTo(Level, {
  foreignKey: "level_id",
  as: "level",
});
Level.hasMany(Question, {
  foreignKey: "level_id",
  as: "questions",
});

Question.belongsTo(Quiz, {
  foreignKey: "quiz_id",
  as: "quiz",
});
Quiz.hasMany(Question, {
  foreignKey: "quiz_id",
  as: "questions",
});

Quiz.belongsTo(User, {
  foreignKey: "user_id",
  as: "author",
});
User.hasMany(Quiz, {
  foreignKey: "user_id",
  as: "quizList",
});

Quiz.belongsToMany(Tag, {
  as: "tags",
  through: "quiz_has_tag", // indique le nom de la table de liaison
  foreignKey: "quiz_id", // indique le champs de la clef étrangére (vers quiz)
  otherKey: "tag_id", // indique le nom de la clef de l'autre (ici le tag)
});
Tag.belongsToMany(Quiz, {
  as: "quizList",
  through: "quiz_has_tag", // indique le nom de la table de liaison
  foreignKey: "tag_id", // indique le champs de la clef étrangére (vers tag)
  otherKey: "quiz_id", // indique le nom de la clef de l'autre (ici le quiz)
});

module.exports = { Answer, Level, Question, Tag, User, Quiz };
