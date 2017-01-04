import * as types from '../consts/ActionTypes'

export function addGoodsType(text) {
    return {
        type: types.ADD_GOODS_TYPE,
        text
    }
}

export function deleteGoodsType(text) {
    return {
        type: types.DELETE_GOODS_TYPE,
        text
    }
}

export function updateGoodsType(text) {
    return {
        type: types.UPDATE_GOODS_TYPE,
        text
    }
}

