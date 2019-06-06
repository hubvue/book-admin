
const errorHandle = {
    /**
     *用于Koa2项目容错机制
     *
     * @param {Object} app
     * @param {Object} logger
     */
    error(app,logger){
        //500容错
        app.use(async (ctx,next)=>{
            try{
                await next();
            }catch(error){
                ctx.body="500报错";
                logger.error(error);
            }
        })
        //404容错
        app.use(async (ctx,next) =>{
            await next();
            if(404 != ctx.status){
                return ;
            }
            ctx.status = 200;
            ctx.body=' <script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
        })
    }
}
module.exports = errorHandle;