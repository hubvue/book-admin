"use strict";

const router = require("koa-simple-router");

const SiteController = require("../controllers/SiteController");

const BookController = require("../controllers/BookController");

const siteController = new SiteController();
const bookController = new BookController();

module.exports = app => {
  app.use(router(_ => {
    _.get("/", siteController.actionIndex());

    _.get("/book", bookController.actionIndex());

    _.get("/book/create", bookController.actionCreate());

    _.get("/book/view", bookController.actionView());

    _.get("/book/update", bookController.actionUpdate());

    _.get("/book/search", bookController.searchBook());

    _.post("/book/create", bookController.createBook());

    _.post("/book/update", bookController.updateBook());

    _.post('/book/delete', bookController.deleteBook());
  }));
};