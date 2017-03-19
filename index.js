import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './app/stores/configureStore.js'
import {syncHistoryWithStore} from 'react-router-redux'

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme  from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app/App.jsx';
import One from './app/views/One.jsx';
import Two from './app/views/Two.jsx';
import OneDetail from './app/views/OneDetail.jsx';
import TwoDetail from './app/views/TwoDetail.jsx';
import Home from './app/views/Home.jsx';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

//material配套的react-tap-event-plugin插件初始化
injectTapEventPlugin();

ReactDOM.render((
        <Provider store={store}>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
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
            </MuiThemeProvider>
        </Provider>
    ), document.getElementById('app')
)

