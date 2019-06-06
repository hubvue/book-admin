const Rize = require('rize');
const rize = new Rize();

rize.goto("http://127.0.0.1:8081/book")
    .click("#view12")
    .waitForNavigation()
    .assertSee("简介")
    .end();