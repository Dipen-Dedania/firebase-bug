import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter} from 'react-router-dom'
import RouteList from './routes'
import './index.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './components/theme_components/my_theme/my_theme';
import LoadingMask from './components/theme_components/loading_mask/loading_mask'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ipaddress: 'init'
        };
    }

    componentWillMount() {
        let _this = this;
        _this.setState({ipaddress: 'true'});
    }
    render() {

        if (this.state.ipaddress === 'init') {
            return (
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <LoadingMask isVisible="true"/>
                    </div>
                </MuiThemeProvider>
            )
        }
        else if (this.state.ipaddress === 'true') {
            return (
                <div>
                    <HashRouter>
                        <div id="wrapper">
                            <MuiThemeProvider muiTheme={muiTheme}>
                                <RouteList />
                            </MuiThemeProvider>
                        </div>
                    </HashRouter>
                </div>
            )
        }
        else {
            return ("");
        }
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

