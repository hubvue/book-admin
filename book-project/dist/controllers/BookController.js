"use strict";

const Book = require("../models/Book");

class BookController {
  constructor() {}

  actionIndex() {
    const book = new Book();
    return async ctx => {
      const result = await book.getBooks();
      ctx.body = await ctx.render("books/pages/index", {
        data: result.data
      });
    };
  }

  actionCreate() {
    return async ctx => {
      ctx.body = await ctx.render("books/pages/create");
    };
  }

  actionUpdate() {
    const book = new Book();
    return async ctx => {
      const result = await book.getBook(ctx.query.id);
      ctx.body = await ctx.render("books/pages/update", {
        data: result.data
      });
    };
  }

  actionView() {
    const book = new Book();
    return async ctx => {
      const result = await book.getBook(ctx.query.id);
      ctx.body = await ctx.render("books/pages/view", {
        data: result.data
      });
    };
  }

  createBook() {
    const book = new Book();
    return async (ctx, next) => {
      const result = await book.createBook({
        'Book[book_name]': ctx.request.body.name,
        'Book[book_author]': ctx.request.body.author,
        'Book[book_press]': ctx.request.body.press,
        'Book[book_time]': ctx.request.body.time,
        'Book[book_price]': ctx.request.body.price,
        'Book[book_isbn]': ctx.request.body.isbn,
        'Book[book_introduction]': ctx.request.body.introduction,
        'Book[book_image]': ctx.request.body.image
      });
      ctx.body = result.data;
    };
  }

  updateBook() {
    const book = new Book();
    return async (ctx, next) => {
      const result = await book.updateBook({
        'id': ctx.request.body.id,
        'Book[book_name]': ctx.request.body.name,
        'Book[book_author]': ctx.request.body.author,
        'Book[book_press]': ctx.request.body.press,
        'Book[book_time]': ctx.request.body.time,
        'Book[book_price]': ctx.request.body.price,
        'Book[book_isbn]': ctx.request.body.isbn,
        'Book[book_introduction]': ctx.request.body.introduction,
        'Book[book_image]': ctx.request.body.image
      });
      ctx.body = result.data;
    };
  }

  deleteBook() {
    const book = new Book();
    return async (ctx, next) => {
      const result = await book.deleteBook(ctx.request.body.id);
      console.log(result);
      ctx.body = result.data;
    };
  }

  searchBook() {
    const book = new Book();
    return async (ctx, next) => {
      let temp = [];

      for (let key in ctx.query) {
        if (ctx.query[key] != '') {
          temp.push({
            [key]: ctx.query[key]
          });
        }
      }

      const result = await book.searchBook(temp);
      ctx.body = await ctx.render('books/pages/index', {
        data: result
      });
    };
  }

}

module.exports = BookController;