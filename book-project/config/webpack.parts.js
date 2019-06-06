/**
 * @name 开发环境css加载器
 * @author wang chong
 */
exports.loadCSS = ({reg=/\.css$/,include,exclude,uses=[]}={})=>({
    module : {
        rules : [{
            test : reg,
            include,
            exclude,
            use :[{
                loader : "style-loader",
            },{
                loader : "css-loader"
            }].concat(uses),
        }]
    }
})

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
exports.miniLoadCss = ({reg=/\.css$/,include,exclude,uses=[]}={}) => ({
    module : {
        rules : [{
            test : reg,
            include,
            exclude,
            use :[{
                loader : MiniCssExtractPlugin.loader,
                options : {
                    publicPath : '../'
                }
            },{
                loader : "css-loader"
            }].concat(uses),
        }]
    },
    plugins : [
        new MiniCssExtractPlugin({
            filename : "styles/[name]-[hash:5].css",
            chunkFilename : "styles/[id]-[hash:5].css"
        })
    ]
})


/**
 * @name 复制src中文件到dist中
 * @author wang chong 
 */
const CopyWebpackPlugin = require("copy-webpack-plugin");
exports.copyHtmlPlugin = (copyArr) => ({
    plugins : [
        new CopyWebpackPlugin(copyArr),
    ]
})


const HtmlAfterWebpackPlugin = require('../plugins/HtmlAfterWebpackPlugin');
exports.htmlAfterPlugin = () => ({
    plugins : [
        new HtmlAfterWebpackPlugin(),
    ]
})


