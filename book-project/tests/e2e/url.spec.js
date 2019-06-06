const Rize = require('rize');
const rize = new Rize();

rize.goto("http://127.0.0.1:8081/")
    .click("#book-admin")
    .waitForNavigation()
    .assertUrlIs("http://127.0.0.1:8081/book")
    .click("#book-create")
    .waitForNavigation()
    .assertUrlIs('http://127.0.0.1:8081/book/create')
    .back()
    .waitForNavigation()
    .click("#view12")
    .waitForNavigation()
    .assertUrlIs("http://127.0.0.1:8081/book/view?id=12")
    .back()
    .waitForNavigation()
    .click("#update12")
    .waitForNavigation()
    .assertUrlIs("http://127.0.0.1:8081/book/update?id=12")
    .end();