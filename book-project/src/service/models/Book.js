const SafeRequest = require("../utils/SafeRequest");

/**
 *@fileoverview 实现Book的数据模型
 *@author wang chong
 */

/**
 * Book类 获取后台关于图书相关的数据类
 * @class Book
 */
class Book{
    /**
     * @constructor
     * 
     */
    constructor(){}
    /**
     *获取后台全部图书的数据方法
     *
     * @example
     * return new Promise
     * getBooks()
     */
    getBooks(){
        const safeRequest = new SafeRequest("/index");
        return safeRequest.fetch({
            method : 'GET',
        })
    }
    /**
     *创建图书并提交图书信息到PHP接口
     * @param {Object} options 参数列表
     * @example
     * return new Promise
     * createBook(options)
     */
    createBook(options){
        const safeRequest = new SafeRequest("/create");
        return safeRequest.fetch({
            method : "POST",
            params : options,
        })
    }
    /**
     *获取指定图书的数据方法
     * @param {string} id 图书id
     * @example
     * return new Promise
     * getBook(id);
     */
    getBook(id){
        const safeRequest = new SafeRequest("/view");
        return safeRequest.fetch({
            method : 'GET',
            params : {
                id:id,
            }
        })
    }
    /**
     *更新图书方法，把更新图书信息提交给PHP接口
     *  @param {Object} options 参数列表
     *  @example
     *  return new Promise
     *  updateBook(options);
     */
    updateBook(options){
        const safeRequest = new SafeRequest(`/update&id=${options.id}`);
        delete options.id;
        return safeRequest.fetch({
            method : 'POST',
            params : options
        })
    }
    /**
     *删除指定id的图书方法
     * @param {string} id 图书id
     * @example
     * return new Promise
     * deleteBook(id);
     */
    deleteBook(id){
        const safeRequest = new SafeRequest(`/delete&id=${id}`);
        return safeRequest.fetch({
            method : 'POST',
        })
    }
    /**
     *通过指定图书名称和图书作者查询图书信息
     * @param {string} name 图书名称    (可选)
     * @param {string} author 图书作者   （可选）
     * @memberof Book
     */
    async searchBook(args = []){
        const safeRequest = new SafeRequest("/index");
        const result = await safeRequest.fetch({
            method : 'GET',
        })
        let booksClone = [];
        if(args.length == 0){
            return result.data;
        }
        if(args.length == 1){
            result.data.forEach((item,index,arr) =>{
                var temp = Object.keys(args[0])[0]     //book_name
                if(item.hasOwnProperty(temp)){
                    if(item[temp].includes(args[0][temp])){
                        booksClone.push(item);
                    }
                }              
            })
        }else{
            result.data.forEach((item,index,arr) =>{
                var temp1 = Object.keys(args[0])[0]     //book_name
                var temp2 = Object.keys(args[1])[0] 
                if(item.hasOwnProperty(temp1) && item.hasOwnProperty(temp2)){
                    if(item[temp1].includes(args[0][temp1]) && item[temp2].includes(args[1][temp2])){
                        booksClone.push(item);
                    }
                }              
            })
        }
        return booksClone;
    }
    
}

module.exports = Book;