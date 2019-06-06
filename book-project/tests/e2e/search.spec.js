const Rize = require('rize');
const rize = new Rize();

rize.goto("http://127.0.0.1:8081/book")
    .type('[name="book_name"]','JavaScript')
    .type('[name="book_author"]','Simpson')
    .click('#searchBtn')
    .waitForNavigation()
    .assertSee('你不知道的JavaScript')
    .end();