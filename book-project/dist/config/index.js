'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = require('path');
var _ = _interopDefault(require('lodash'));

// const { join } = require("path");
// const _ = require("lodash");
let config = {
    "viewDir": path.join(__dirname, "..", 'views'),
    'staticDir': path.join(__dirname, "..", "assets"),
    'logsDir' : path.join(__dirname ,'..',"logs/log.log"),
};
{
    let prodConfig = {
        port : 8081,
        cacheMemory : "memory",
        baseUrl : "http://127.0.0.1/bookadmin/web/index.php?r=book",
    };
    config = _.extend(config,prodConfig);
}

module.exports = config;
