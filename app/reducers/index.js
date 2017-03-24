import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as form} from 'redux-form'

import goods from '../views/redux/OneRedux'
import goodstype from '../views/redux/TwoRedux'
import IdCardRepository from '../components/shfhsc/sfzcx/redux/IdCardRepositoryRedux'
import IdcardTable from '../components/shfhsc/sfzcx/redux/IdCardTableRedux'


const rootReducer =combineReducers({
    goodstype,
    goods,
    routing:routerReducer,
    form,
    IdCardRepository,
    IdcardTable
});

export default rootReducer;
