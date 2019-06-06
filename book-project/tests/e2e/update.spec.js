const Rize = require('rize');
const rize = new Rize();
rize.goto('http://127.0.0.1:8081/book')
    .click("#update12")
    .waitForNavigation()
    .clear('[name="book_price"]')
    .type('[name="book_price"]','1000')
    .click("#updateBtn")
    .assertTitle("图书管理")
    .waitForNavigation()
    .type('[name="book_name"]','你不知道的JavaScript')
    .assertSee('1000')
    .end();