import React from 'react';
import {Route} from 'react-router-dom'

import Login from './scene/login/login'
import Home from './scene/Home/home'
import Home1 from './scene/Home1/home'
import Home2 from './scene/Home2/home'
import Home3 from './scene/Home3/home'
import Home4 from './scene/Home4/home'

import Fix from 'react-tap-event-plugin';


class RouteList extends React.Component {

    constructor(props) {
        super(props);
        Fix();

    }

    render() {
        return (

            <div>
                <Route exact path="/" component={Login}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/demo1" component={Home}/>
                <Route exact path="/demo2" component={Home1}/>
                <Route exact path="/demo3" component={Home2}/>
                <Route exact path="/demo4" component={Home3}/>
                <Route exact path="/demo5" component={Home4}/>
            </div>
        );
    }
}

export default RouteList;