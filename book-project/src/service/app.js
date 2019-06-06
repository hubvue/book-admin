
import Koa from 'koa';
import KoaStatic from 'koa-static';
import co from "co";
import render from "koa-swig";
import errorHandle from "./middlewares/errorHandle";
import config from "./config";
const logHandle = require("./middlewares/logHandle")();
import parser from "koa-parser";
const app = new Koa();

//body参数
app.use(parser());

//模板渲染
app.context.render = co.wrap(render({
    root : config.viewDir,
    autoescape : true,
    cache : config.cacheMemory,
    ext : 'html',
    writeBody :false
}))
//静态资源
app.use(KoaStatic(config.staticDir));

//404 500容错机制
errorHandle.error(app,logHandle);

//路由管理
require("./routes/route")(app);
global.gc()

setInterval(()=>{
    console.log(process.memoryUsage().heapUsed);
},1000);

app.listen(config.port,()=>{
    console.log("Server is runnind...");
})