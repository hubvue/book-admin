"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _co = _interopRequireDefault(require("co"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _errorHandle = _interopRequireDefault(require("./middlewares/errorHandle"));

var _config = _interopRequireDefault(require("./config"));

var _koaParser = _interopRequireDefault(require("koa-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logHandle = require("./middlewares/logHandle")();

const app = new _koa.default(); //body参数

app.use((0, _koaParser.default)()); //模板渲染

app.context.render = _co.default.wrap((0, _koaSwig.default)({
  root: _config.default.viewDir,
  autoescape: true,
  cache: _config.default.cacheMemory,
  ext: 'html',
  writeBody: false
})); //静态资源

app.use((0, _koaStatic.default)(_config.default.staticDir)); //404 500容错机制

_errorHandle.default.error(app, logHandle); //路由管理


require("./routes/route")(app);



app.listen(_config.default.port, () => {
  console.log("Server is runnind...");
});
