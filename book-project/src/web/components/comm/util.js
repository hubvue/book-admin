function util(){};
util.__version = 0.1;
util.throttle = (fn,wait)=>{
    let timer;
    return (...args) =>{
        if(!timer){
            timer = setTimeout(()=>timer = null,wait);
            return fn.apply(this,args);
        }
    }
}
export default util;