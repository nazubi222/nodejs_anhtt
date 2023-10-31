const express = require("express");
const meRoute = express.Router();
const MeController = require("../app/controllers/MeController");

meRoute.get("/stored/blogs", MeController.storedBlogs);

module.exports = meRoute;
