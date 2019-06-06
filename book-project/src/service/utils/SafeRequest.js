const fetch = require("node-fetch");
const config = require('../config');
const logHandle = require("../middlewares/logHandle")();
const { URLSearchParams } = require("url");
/**
 *用于后端接口的工具类
 *
 * @class SafeRequest
 */
class SafeRequest{
    /**
     * @constructor
     * @param {string} url
     * @memberof SafeRequest
     */
    constructor(url){
        this.url = url;
        this.baseUrl = config.baseUrl;
    }
    /**
     * 与后端接口的请求方法
     * @param {Object} options 配置项
     * @returns {Promise} 
     * @memberof SafeRequest
     */
    fetch(options){
        let fetchRequest;
        if(options.method == 'GET'){
            fetchRequest = fetch(`${this.baseUrl}${this.url}${this._urlParams(options.params)}`)
        }else {
            fetchRequest = fetch(`${this.baseUrl}${this.url}`,{
                method : options.method,
                body: this._bodyParams(options.params),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded'  },
            })
        }
        let result = {
            code : 0,
            messgae : '',
            data : [],
        }
        return new Promise((resolve,reject) =>{
            fetchRequest.then(res=>res.json())
                        .then(json=>{
                            result.code = 1,
                            result.message = 'ok',
                            result.data = json;
                            resolve(result);
                        })
                        .catch(error=>{
                            logHandle.error(error);
                            result.message = '与后端接口异常',
                            reject(result);
                        })
        }).catch(error=>error);
    }
    /**
     * 工具类的方法，用于将对象转化成字符串连接在url后面
     * @param {Object} [params={}]
     * @returns {String} 
     * @memberof SafeRequest
     */
    _urlParams(params = {}){
        let paramsStr = "";
        for(let key in params){
            paramsStr += `&${key}=${params[key]}`;
        }
        return paramsStr;
    }
    /**
     * 工具类的方法，用于将对象转化成URLSearchParams对象，用于表单提交
     * @param {*} [params={}]
     * @returns {URLSearchParams}
     * @memberof SafeRequest
     */
    _bodyParams(params = {}){
        const param = new URLSearchParams();
        for(let key in params) {
            param.append(key,params[key]);
        }
        return param;
    }
}

module.exports = SafeRequest;