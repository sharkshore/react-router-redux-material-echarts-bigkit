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
                    {/*  此处设置成和项目文件夹一个名字,保证发布到服务器时URL路径一致  */}
                    <Route path="/log-frontend" component={App}>
                        <IndexRoute component={Jrgc}/>
                        <Route path="/log-frontend/one" component={One}/>
                        <Route path="/log-frontend/shfhsc" component={Shfhsc}>
                            <Route path="/log-frontend/shfhsc/sfzcx" component={Sfzcx}/>
                            <Route path="/log-frontend/shfhsc/shcx" component={Shcx}/>
                            <Route path="/log-frontend/shfhsc/yhqcx" component={Yhqcx}/>
                        </Route>
                        <Route path="/log-frontend/sfzcx" component={Sfzcx}/>
                        <Route path="/log-frontend/jrgc" component={Jrgc}/>
                        <Route path="/log-frontend/one/detail/:id" component={OneDetail}/>
                        <Route path="/log-frontend/two" component={Two}>
                            <Route path="/log-frontend/two/detail/:id" component={TwoDetail}/>
                        </Route>
                    </Route>
                </Router>
        );
    }
}



