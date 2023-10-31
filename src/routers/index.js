const express = require("express");
const rootRouter = express.Router();
const blogRoute = require("./blog");
const meRoute = require("./me");
const siteRouter = require("./site");

rootRouter.use("/blogs", blogRoute);
rootRouter.use("/me", meRoute);
rootRouter.use("/", siteRouter);

module.exports = rootRouter;
