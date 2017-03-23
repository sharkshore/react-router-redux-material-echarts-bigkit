
export const REFRESH_DATA_SUCCESS='REFRESH_DATA_SUCCESS';

/*  2.actionCreator  */
export function addGoods(text) {
    return {
        type: ADD_GOODS,
        text
    }
}



const initData=[]


/*  3.reducer  */

//这里的state只是一个局部state,在redux的store中,相当于根root.goods
function goods(state = initData, action) {
    switch (action.type) {
        case REFRESH_DATA_SUCCESS:
            console.log('REFRESH_DATA_SUCCESS');
            console.log('接口返回数据:');
            console.log(action.payload);
            //MyEcharts组件会自动检测数据的变化,数据发生变化会自动setOption
            return action.payload;
        default:
            return state
    }

}

/*  4.reselect  */
//mapStateToProps用到的辅助方法
export function getOne(goods, id) {
    for (var i = 0; i < goods.length; i++) {
        if (goods[i].id == id) {
            return goods[i];
        }
    }
}


export default goods;
