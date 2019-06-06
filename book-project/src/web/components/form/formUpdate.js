import "./form.css";

class Update{
    constructor(){
        this.btn = $("#btn");
        this.init();
    }
    init(){
        this.bindEvent();
    }
    bindEvent(){
        import(/* webpackChunkName: "util" */ '../comm/util').then(_=> {
            this.btn.click(_.default.throttle(this.submit,1000));
        });
        
    }
    submit(){
        const urlSearchParams = new URLSearchParams();
        urlSearchParams.append('id',$("form").attr('data'))
        urlSearchParams.append('isbn',$("#bookIsbn").val())
        urlSearchParams.append('name',$("#bookName").val())
        urlSearchParams.append('author',$("#bookAuthor").val())
        urlSearchParams.append('press',$("#bookPress").val())
        urlSearchParams.append('price',$("#bookPrice").val())
        urlSearchParams.append('time',$("#bookTime").val())
        urlSearchParams.append('image',$("#bookImgUrl").val())
        urlSearchParams.append('introduction',$("[name='book_introduction']").val())
        fetch('/book/update',{
            method : "POST",
            body : urlSearchParams,
        }).then(res=>res.json())
          .then(json=>{
              if(json.code == 1 &&json.message == 'ok'){
                  location.href = '/book';
              }else{
                  alert('更新图书信息失败!');
              }
          }).catch(err=>{
                alert("更新图书信息失败！");
          })
    }
}
new Update();

// export default Update;