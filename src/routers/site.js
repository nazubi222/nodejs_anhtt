const express = require("express");
const siteRouter = express.Router();
const SiteController = require("../app/controllers/SiteController");

siteRouter.get("/", SiteController.home);

module.exports = siteRouter;
