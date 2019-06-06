const merge = require("webpack-merge");
const {join} = require("path");
const parts = require("./webpack.parts");

const config = {
    output: {
        path: join(__dirname, '..','dist/assets'),
        filename: 'scripts/[name].js',
        publicPath : "/"
    },
}
module.exports = merge([
    config,
    parts.loadCSS(),
    parts.copyHtmlPlugin([{
        from : join(__dirname,'..','src/web/components'),
        to : "./components",
        ignore: ['*.js','*.css'],  //忽略文件
        copyUnmodified : true,      //在watch的时候，如果模板没有变，就不传递
    },{
        from : join(__dirname,'..','src/web/views/common'),
        to : "./views/common"
    }]),
    
])