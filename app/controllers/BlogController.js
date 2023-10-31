const Blog = require("../models/Blog.js");
const {
  mutilpleMongooseToObject,
  mongooseToObject,
} = require("../../untils/mongoose.js");

class BlogController {
  index(req, res, next) {
    Blog.find({})
      .then((blogs) => {
        blogs = mutilpleMongooseToObject(blogs);
        res.render("blogs/index", { blogs });
      })
      .catch(next);
  }
  show(req, res, next) {
    const { id } = req.params;
    Blog.findById(id)
      .then((blog) => {
        blog = mongooseToObject(blog);
        res.render("blogs/show", { blog });
      })
      .catch(next);
  }
  create(req, res, next) {
    res.render("blogs/create");
  }
  store(req, res, next) {
    const newBlog = new Blog(req.body);
    newBlog
      .save()
      .then(() => res.redirect("/blogs/"))
      .catch(next);
  }
  edit(req, res, next) {
    Blog.findOne({ _id: req.params.id })
      .then((blog) =>
        res.render("blogs/edit", {
          blog: mongooseToObject(blog),
        })
      )
      .catch(next);
  }
  update(req, res, next) {
    Blog.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/blogs"))
      .catch(next);
  }
  destroy(req, res, next) {
    Blog.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
  handleMultipleBlogs(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Blog.deleteMany({ _id: { $in: req.body.blogIds } })
          .then(() => res.redirect("back"))
          .catch(next);
        break;
      default:
        res.json("Action is invalid!");
    }
  }
}

module.exports = new BlogController();
