import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from '../App.jsx';
import One from '../views/One.jsx';
import Two from '../views/Two.jsx';
import OneDetail from '../views/OneDetail.jsx';
import TwoDetail from '../views/TwoDetail.jsx';
import Home from '../views/Home.jsx';
import Shfhsc from '../views/Shfhsc.jsx'
import Jrgc from '../views/Jrgc.jsx'

import Sfzcx from '../components/shfhsc/sfzcx/SfzcxContent.jsx'
import Shcx from '../components/shfhsc/shcx/ShcxContent.jsx'
import Yhqcx from '../components/shfhsc/yhqcx/YhqcxContent.jsx'

export default class RootRouter extends React.Component {

    render() {
        return (
                <Router {...this.props} >
                    <Route path="/" component={App}>
                        <IndexRoute component={Jrgc}/>
                        <Route path="/one" component={One}/>
                        <Route path="/shfhsc" component={Shfhsc}>
                            <Route path="/shfhsc/sfzcx" component={Sfzcx}/>
                            <Route path="/shfhsc/shcx" component={Shcx}/>
                            <Route path="/shfhsc/yhqcx" component={Yhqcx}/>
                        </Route>
                        <Route path="/sfzcx" component={Sfzcx}/>
                        <Route path="/jrgc" component={Jrgc}/>
                        <Route path="/one/detail/:id" component={OneDetail}/>
                        <Route path="/two" component={Two}>
                            <Route path="/two/detail/:id" component={TwoDetail}/>
                        </Route>
                    </Route>
                </Router>
        );
    }
}



