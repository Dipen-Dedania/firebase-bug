import React from 'react';
// Material UI theme

import RaisedButton from 'material-ui/RaisedButton';
import {IsUserLoggedIn} from '../../service/firebase'

import {LandingPage} from '../../links'
import {Logout,GetUserDetail} from '../../service/firebase'

class MainPage extends React.Component{

    constructor(props) {
        super(props);
        this.logOut=this.logOut.bind(this);
    }
    componentDidMount(){
        IsUserLoggedIn(false,function (user) {
            if (user != null) {
                console.log(user);
                let div = document.getElementById('UserData');
                div.innerHTML = "<h2>Demopage4</h2><br>"+"Username :" + user.displayName + "<br>Email :" + user.email;
            }
        });
    }

    logOut(){
        Logout(function (flag) {
            window.open(LandingPage,"_self", false);
        }) ;
    }
    render(){
        return(
            <div className="containerDiv">
                <div className="mainDiv">
                    <div  id="contentDiv">
               <div id="UserData" className="text-center">
                   Welcome Home
               </div>
               <br/>
               <div className="text-center">
               < RaisedButton label="Logout" backgroundColor="#FFF" labelColor="#000" onClick={this.logOut} secondary={true} />
           </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;