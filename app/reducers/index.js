import goods from './goods'
import goodstype from './goodstype'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

const rootReducer =combineReducers({
    goodstype,
    goods,
    routing:routerReducer
});

export default rootReducer;
