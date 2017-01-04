import { createStore ,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import {browserHistory}from 'react-router'
import {routerMiddleware} from 'react-router-redux'
const historyMiddle = routerMiddleware(browserHistory);

//定义中间件数组
const middlewares = [];
if (module.hot) {
    let logger = createLogger();
    //1.存放日志中间件
    middlewares.push(logger);
}
//2.存放redux-thunk中间件,可以替换成redux-saga
middlewares.push(thunk);

//3.存放react-router-redux中间件
middlewares.push(historyMiddle);

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState,
        composeWithDevTools(applyMiddleware(...middlewares)));
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}

