import React from 'react';

// Material UI theme
import '../../index.css'
import styles from '../../components/theme_components/my_theme/my_theme';
import {Row,Col} from 'react-bootstrap'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';
import LoadingMask from '../../components/theme_components/loading_mask/loading_mask'
import {GenerateAccessToken} from '../../helper'

import {firebaseApp,SendVerificationMail} from '../../service/firebase'
import {Home,Register} from '../../links'
import {validateEmail} from '../../helper'

class DCLogin extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: 'test@gmail.com',
            password: 'test123',
            emailerror: 'tdt',
            open: false,
            snackbarmessage:'',
            pwderror: '',
            verifymailflag:false,
            user:'',
            isLoadingVisible: false
        };
        this.signIn = this.signIn.bind(this);
        this.sendVerificationMail=this.sendVerificationMail.bind(this);
        this.userLoggedInCallback = this.userLoggedInCallback.bind(this);
        //IsUserLoggedIn(false, this.userLoggedInCallback);
    }


    userLoggedInCallback (user){
        window.open(Home,"_self", false)
    }

    handleTouchTap = () => {
        this.setState({
            open: true,
            snackbarmessage:'invalid login'
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
            snackbarmessage:'invalid login'
        });
    };

    sendVerificationMail() {

        var _this = this
        SendVerificationMail(_this.state.user,function (flag) {
            if(flag){
                alert('verification mail has been sent');
                _this.setState({
                    verifymailflag:false,
                });
            }
            else{
                alert('sending mail failed');
            }
        });
    }

    signIn() {
        const { email, password } = this.state;
        var _this = this;
        var shouldShowError = false;

        if(!(!!email && validateEmail(email))){
            this.setState({emailerror: 'Enter a valid Email Address'})
            shouldShowError = true;
        }
        if(!(!!password)){
            this.setState({pwderror: 'This field is required.'})
            shouldShowError = true;
        }
        if(shouldShowError){
            return;
        }

        _this.setState({isLoadingVisible: true});

        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error})
            })
            .then(function(user){
                console.log(user);
                if(!!user) {
                    window.open(Home,"_self", true);
                    //window.open("/#/demo","_self", true);
                    window.open("#/demo2","_blank");
                    window.open("#/demo3","_blank");
                    window.open("#/demo4","_blank");
                    window.open("#/demo5","_blank");
                    console.log(JSON.stringify(user));
                }
                else
                {
                    console.log("Invalid login..");
                    _this.setState({open: true,
                        snackbarmessage:'invalid login'
                    })
                }
            });

    }

    render(){
        let button= < RaisedButton label="Login" backgroundColor="#FFF" labelColor="#000" onClick={this.signIn} secondary={true} />
        return (

            <div className="containerDiv">
                <div className="mainDiv">
                    <div  id="contentDiv">
                     <LoadingMask isVisible={this.state.isLoadingVisible} />
                    <AppBar title="Login" showMenuIconButton ={false} />
                    <div className="padding-container">
                        <TextField
                            className="icon-label"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            hintText="" value={this.state.email} errorText={this.state.emailerror}
                            onChange={event => this.setState({email: event.target.value,emailerror: ''})}
                            floatingLabelText=
                                {<span>
                                    <span className='icon-Profile-Pic fa-lg' name="profilename"/>
                                    Email
                                </span>}
                            fullWidth={true}
                            type="text"
                        /><br />

                        <TextField
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            className="icon-label"
                            hintText="" value={this.state.password} errorText={this.state.pwderror}
                            onChange={event => this.setState({password: event.target.value,pwderror: ''})}
                            floatingLabelText={<span>
                                <span className='icon-Password fa-lg' name="password"/>
                                Password
                            </span>} fullWidth={true}
                            type="password"
                        /><br />
                        <br />

                    </div>

                    <div className="text-center">
                        {button}
                    </div>

                    <br />
                    <div className="text-center"><a href={Register}>Signup instead ?</a></div>
                    <Snackbar
                        open={this.state.open}
                        message={this.state.snackbarmessage}
                        autoHideDuration={3000}
                        onRequestClose={this.handleRequestClose}
                    />
                    </div>
                </div>
            </div>
        );
    }
}
export default DCLogin;