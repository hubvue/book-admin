import "./list.css"
class Index{
    constructor(){
        this.table = $(".table");
        this.init();
    }
    init(){
        this.bindEvent();
    }
    bindEvent(){
        this.table.click(function(e){
            if($(e.target).attr('title') == 'delete'){
                fetch('/book/delete',{
                    method: 'POST',
                    body : new URLSearchParams([['id',$(e.target).attr('data-id')]])
                }).then(res=>res.json())
                  .then(json => {
                      if(json.code == 1 && json.message == 'ok'){
                          alert('删除成功！');
                          location.href = '/book';
                      }else{
                          alert('删除失败！');
                      }
                  }).catch(err => {
                      alert("删除失败！");
                  })
            }
        })
    }
}
new Index();
// export default Index;