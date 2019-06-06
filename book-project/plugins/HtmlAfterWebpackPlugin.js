//定义插件的名字
const pluginName = 'HtmlAfterWebpackPlugin';

const assetsHelp = (data) => {
    let js = [];
    let css = [];
    const dir = {
        js : item => `<script src="${item}"></script>`,
        css : item => `<link rel="stylesheet" href="${item}">`,
    }
    for(let jsitem of data.js){
        js.push(dir.js(jsitem));
    }
    for(let cssitem of data.css){
        css.push(dir.css(cssitem));
    }
    return {
        js,
        css,
    }
}
//插件类
class HtmlAfterWebpackPlugin {
    //类必须要有一个apply的方法
        //参数传入compiler
            //compiler是webpack的一个实例
    apply(compiler) {
            //插件立马执行。插件放在webpack的实例上。
            //执行周期在webpack的运行阶段就可以执行
            //想把静态文件插入到html里面来，插入的时机一定是还没有最终生成到dist里面，并且是html-webpack-plugin处理html之后
                //1、寻找何时才能拦截生成的swig，
                //2、如何分清这个swig文件对应的JS和CSS
                //3、一定要放在html-webpack-plugin之后。
            //tap是注册一个事件
        compiler.hooks.compilation.tap(pluginName,compilation => {

            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName,htmlPluginData => {
                            
                let _html = htmlPluginData.html;
                const result = assetsHelp(htmlPluginData.assets);
                _html = _html.replace(/<!-- injectjs -->/g,result.js.join(""));
                _html = _html.replace(/<!-- injectcss -->/g,result.css.join(""));
                _html = _html.replace(/components:/g,'../../../components/');
                _html = _html.replace(/pages:/g,'../../common/');
                
                htmlPluginData.html = _html;
            })
            
        })
    }
}

module.exports = HtmlAfterWebpackPlugin;