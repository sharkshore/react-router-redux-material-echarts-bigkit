/**
 * fetch调用接口|redux中间件
 *  默认使用post请求
 * action有types属性才被认定为要执行此中间件

 1.LOADING用于调用fetch前,显示LOADING状态,
 2.SUCCESS用于调用成功后,
 3.ERROR用于调用失败后

 注意:
 1.结果封装在action.payload里

 * @param store
 */
const reduxComposableFetch = store => next => action => {
    if (!action.url || !Array.isArray(action.types)) {
        return next(action);
    }
    const [LOADING, SUCCESS, ERROR]=action.types;
    next({
        type: LOADING,
        loading: true,
        ...action
    });

    fetch(action.url, { method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(action.params) ,credentials: 'include'})
        .then((res) => {
            if (res.status != 200) {
                console.log('Looks like there was a problem. Status Code: ' + res.status);
                return;
            }
            return res;
        })
        .then(res => res.json())
        .then(result => {
            next({
                type: SUCCESS,
                loading: false,
                payload: result,
                params:action.params   //请求成功会附带上参数
            });
        })
        .catch(err => {
            next({
                type: ERROR,
                loading: false,
                payload: err,
                params:action.params    //请求失败会附带上参数
            });
        });

}

export default reduxComposableFetch;


