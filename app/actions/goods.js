import * as types from '../consts/ActionTypes'

export function addGoods(text) {
    return {
        type: types.ADD_GOODS,
        text
    }
}

export function deleteGoods(text) {
    return {
        type: types.DELETE_GOODS,
        text
    }
}

export function updateGoods(text) {
    return {
        type: types.UPDATE_GOODS,
        text
    }
}

