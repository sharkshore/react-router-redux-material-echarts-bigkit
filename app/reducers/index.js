import goods from '../views/redux/OneRedux'
import goodstype from '../views/redux/TwoRedux'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

const rootReducer =combineReducers({
    goodstype,
    goods,
    routing:routerReducer
});

export default rootReducer;
