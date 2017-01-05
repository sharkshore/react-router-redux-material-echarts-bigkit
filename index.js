import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './app/stores/configureStore.js'
import {syncHistoryWithStore} from 'react-router-redux'

import App from './app/App.jsx';
import One from './app/views/One.jsx';
import Two from './app/views/Two.jsx';
import OneDetail from './app/views/OneDetail.jsx';
import TwoDetail from './app/views/TwoDetail.jsx';
import Home from './app/views/Home.jsx';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/one" component={One}/>
                    <Route path="/one/detail/:id" component={OneDetail}/>
                    <Route path="/two" component={Two}>
                        <Route path="/two/detail/:id" component={TwoDetail}/>
                    </Route>
                </Route>
            </Router>
        </Provider>
    ), document.getElementById('app')
)

