const express = require("express");
const blogRoute = express.Router();
const BlogController = require("../app/controllers/BlogController");

blogRoute.get("/", BlogController.index);
blogRoute.get("/create", BlogController.create);
blogRoute.post("/store", BlogController.store);
blogRoute.get("/:id/edit", BlogController.edit);
blogRoute.put("/:id", BlogController.update);
blogRoute.delete("/:id", BlogController.destroy);
blogRoute.get("/:id", BlogController.show);
blogRoute.post("/handle-multiple-blogs", BlogController.handleMultipleBlogs);

module.exports = blogRoute;
