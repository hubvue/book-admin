const Rize = require("rize");
const rize = new Rize();

rize.goto('http://127.0.0.1:8081/book')
    .click('[data-id="65"]')
    .waitForNavigation()
    .press("Enter")
    .waitForNavigation()
    .assertSee('周慧敏')
    .end();