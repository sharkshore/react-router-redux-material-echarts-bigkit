import * as types from '../consts/ActionTypes'

const initgoods= [
    {
        id:1,
        name:'黄金5M',
        type:1,
        price:'20'
    },
    {
        id:2,
        name:'黄金8M',
        type:2,
        price:'10'
    },
    {
        id:3,
        name:'白银10M',
        type:1,
        price:'80'
    }
];


//这里的state只是一个局部state,在redux的store中,相当于根root.goods
function goods(state = initgoods, action) {
    switch (action.type) {
        case types.ADD_GOODS:
            return [
                ...state,
                action.text
            ];
        case types.DELETE_GOODS:
            return state.filter(goods =>
                goods.id != action.text.id
            );
        case types.UPDATE_GOODS:
            return state.map(goods =>
                goods.id == action.text.id ? action.text : goods
            );
        default:
            return state
    }

}

export default goods;
