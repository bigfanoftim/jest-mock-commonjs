const express = require("express");

const postRouter = require("./posts-router");

const routes = express.Router();

routes.use("/posts", postRouter);

module.exports = routes;
