const { Tag } = require("../models");

const tagController = {
  tagsPage: async (req, res) => {
    try {
      const tags = await Tag.findAll({
        order: [["name", "ASC"]],
      });
      res.render("tags", { tags });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = tagController;
