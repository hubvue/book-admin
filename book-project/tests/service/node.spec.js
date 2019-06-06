const fetch = require('../../util/fetchUtil');
describe('node接口测试',()=>{
    //删除接口失败测试
    it('删除接口失败测试',(done) =>{
        fetch.fetchGet(`http://127.0.0.1:8081/book/delete/58`).then((data)=>{
            if(data.code == 500 && data.message=='error'){
                done();
            }else{
                done(new Error('请求接口出现错误'));
            }
        }).catch(err=>{
            done(err);
        })
    })
    //删除接口成功测试
    it('删除接口成功测试',(done) =>{
        fetch.fetchGet(`http://127.0.0.1:8081/book/delete/67`).then((data)=>{
            if(data.code == 200 && data.message=='success'){
                done();
            }else{
                done(new Error('删除接口出现错误'));
            }
        }).catch(err=>{
            done(err);
        })
    })
    //更新图书信息接口测试
    it('更新图书信息接口成功测试',(done) => {
        fetch.fetchPost(`http://127.0.0.1:8081/book/update`,{
            book_id : 12,
            book_name: "你不知道的JavaScript",
            book_author: " [美] Kyle Simpson ",
            book_press: "人民邮电出版社",
            book_time: "1899-12-07 05:25",
            book_price: 70,
            book_isbn: "9787115431165",
            book_introduction: "JavaScript语言有很多复杂的概念，但却用简单的方式体现出来（比如回调函数），因此，JavaScript开发者无需理解语言内部的原理，就能编写出功能全面的程序；就像收音机一样，你无需理解里面的管子和线圈都是做什么用的，只要会操作收音机上的按键，就可以收听你喜欢的节目。然而，JavaScript的这些复杂精妙的概念才是语言的精髓，即使是经验丰富的JavaScript开发者，如果没有认真学习也无法真正理解语言本身的特性。正是因为绝大多数人不求甚解，一遇到出乎意料的行为就认为是语言本身有缺陷，进而把相关的特性加入黑名单，久而久之就排除了这门语言的多样性，人为地使它变得不完整、不安全。",
            book_image: "https://img3.doubanio.com/view/subject/l/public/s28033372.jpg"
        }).then(res=>res.json()).then(data=>{
            if(data.code == 200 && data.message == 'success'){
                done();
            }else{
                done(new Error('更新接口出现错误'));
            }
        }).catch(err=>{
            done(err);
        })
    })
    //新增接口成功测试
    it('新增图书接口成功测试',(done) => {
        fetch.fetchPost(`http://127.0.0.1:8081/book/create`,{
            book_name: "王冲",
            book_author: " [美] Kyle Simpson ",
            book_press: "人民邮电出版社",
            book_time: "1899-12-07 05:25",
            book_price: 70,
            book_isbn: "9787115431165",
            book_introduction: "JavaScript语言有很多复杂的概念，但却用简单的方式体现出来（比如回调函数），因此，JavaScript开发者无需理解语言内部的原理，就能编写出功能全面的程序；就像收音机一样，你无需理解里面的管子和线圈都是做什么用的，只要会操作收音机上的按键，就可以收听你喜欢的节目。然而，JavaScript的这些复杂精妙的概念才是语言的精髓，即使是经验丰富的JavaScript开发者，如果没有认真学习也无法真正理解语言本身的特性。正是因为绝大多数人不求甚解，一遇到出乎意料的行为就认为是语言本身有缺陷，进而把相关的特性加入黑名单，久而久之就排除了这门语言的多样性，人为地使它变得不完整、不安全。",
            book_image: "https://img3.doubanio.com/view/subject/l/public/s28033372.jpg"
        }).then(res=>res.json()).then(data=>{
            if(data.code == 200 && data.message == 'success'){
                done();
            }else{
                done(new Error('更新接口出现错误'));
            }
        }).catch(err=>{
            done(err);
        })
    })

})