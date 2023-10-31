const Blog = require("../models/Blog.js");
const {
  mutilpleMongooseToObject,
  formatCreatedAtInObject,
} = require("../../untils/mongoose");

class MeController {
  storedBlogs(req, res, next) {
    Promise.all([Blog.find({}), Blog.countDocumentsDeleted()])
      .then(([blogs, deletedBlogs]) => {
        blogs = mutilpleMongooseToObject(blogs);
        blogs = formatCreatedAtInObject(blogs);
        res.render("me/stored_blogs", {
          blogs,
          deletedBlogs,
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
