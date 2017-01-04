import * as types from '../consts/ActionTypes'

const initgoodstype= [
    {
        id:1,
        name:'黄金'
    },
    {
        id:2,
        name:'白银'
    },
    {
        id:3,
        name:'黄铜'
    }
];


//这里的state只是一个局部state,在redux的store中,相当于根root.goodstype
function goodstype(state = initgoodstype, action) {
    switch (action.type) {
        case types.ADD_GOODS_TYPE:
            return [
                ...state,
                action.text
            ];
        case types.DELETE_GOODS_TYPE:
            return state.filter(goodstype =>
                goodstype.id != action.text.id
            );
        case types.UPDATE_GOODS_TYPE:
            return state.map(goodstype =>
                goodstype.id == action.text.id ? action.text : goodstype
            );
        default:
            return state
    }

}

export default goodstype;

