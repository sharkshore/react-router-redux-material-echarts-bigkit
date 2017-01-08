
//LOADING用于调用fetch前,显示LOADING状态,
//SUCCESS用于调用成功后,
//ERROR用于调用失败后
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


