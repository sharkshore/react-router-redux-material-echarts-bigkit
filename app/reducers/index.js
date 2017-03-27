import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {reducer as form} from 'redux-form'

//以下是reducer
import goods from '../views/redux/OneRedux'
import goodstype from '../views/redux/TwoRedux'
import IdCardRepository from '../components/shfhsc/sfzcx/redux/IdCardRepositoryRedux'
import IdcardTablePager from '../components/shfhsc/sfzcx/redux/IdCardTableRedux'
import IdCardAutoComplete from '../components/shfhsc/sfzcx/redux/IdCardAutoCompleteRedux'
import IdcardFormParam from '../components/shfhsc/sfzcx/redux/IdCardFormRedux'


const rootReducer =combineReducers({
    goodstype,
    goods,
    routing:routerReducer,
    form,
    IdCardRepository,
    IdcardTablePager,
    IdCardAutoComplete,
    IdcardFormParam
});

export default rootReducer;
