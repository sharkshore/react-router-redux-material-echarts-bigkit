/**
 * 异步调用接口的中间件
 *
 * 检测到action是否有types属性,如果有就会调用接口,分别执行三次action

 LOADING用于调用fetch前,显示LOADING状态,
 SUCCESS用于调用成功后,
 ERROR用于调用失败后

 结果封装在action.payload里

 * @param store
 */
const reduxComposableFetch=store=>next=>action=>{
    if(!action.url||!Array.isArray(action.types)){
        return next(action);
    }
    const [LOADING,SUCCESS,ERROR]=action.types;
    next({
        type:LOADING,
        loading:true,
        ...action
    });

    fetch(action.url,{params:action.params})
        .then((res)=>{
            if(res.status!=200) {
                console.log('Looks like there was a problem. Status Code: ' + res.status);
                return;
            }
            return res;
        })
        .then(res => res.json())
        .then(result=>{
            next({
                type:SUCCESS,
                loading:false,
                payload:result
            });
        })
        .catch(err=>{
            next({
                type:ERROR,
                loading:false,
                payload:err
            });
        });

}

export default reduxComposableFetch;


