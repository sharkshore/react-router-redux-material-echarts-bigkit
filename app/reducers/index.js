import goods from '../views/redux/OneRedux'
import goodstype from '../views/redux/TwoRedux'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as form} from 'redux-form'

const rootReducer =combineReducers({
    goodstype,
    goods,
    routing:routerReducer,
    form
});

export default rootReducer;
