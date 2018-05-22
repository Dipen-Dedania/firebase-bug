import * as firebase from 'firebase';
import {LandingPage, Home} from '../links'

export const dbEnvironment = '/Development';

const config = {
    apiKey: "AIzaSyDcqbvK6u1X7MtwpSDodC0L2AXdcUFNZyU",
    authDomain: "accountmanager-75fb0.firebaseapp.com",
    databaseURL: "https://accountmanager-75fb0.firebaseio.com",
    projectId: "accountmanager-75fb0",
    storageBucket: "accountmanager-75fb0.appspot.com",
    messagingSenderId: "84154885719"
};

export const firebaseApp = firebase.initializeApp(config);

export const IsUserLoggedIn = function (redirect = false, callback = null) {

    let unsubscribe = firebaseApp.auth().onAuthStateChanged(function(user) {
         if (!user) {
            console.log("user is not logged in");
             if(!!callback){
                 callback({
                     email: "user is not logged in",
                     displayName: "---------------"
                 });
             }
            //window.open(LandingPage,"_self",false);
            unsubscribe();
            return false;
        }
        else{
            console.log("user is logged in");
            if(redirect){
                window.open(Home,"_self",false);
            }

             // firebaseApp.auth().currentUser.updateProfile({
             //     displayName: "firebase bug"
             // }).then(function () {
             //     console.log("Updated");
             // }, function (error) {
             //     console.log("Error happened");
             // });

            if(!!callback){
                callback(user);
            }
             unsubscribe();
            return user;
        }
    });
};


export const Logout =function (callback) {

    firebaseApp.auth().signOut().then(function() {
       callback(true);
    }, function(error) {
      callback(false);
    });
};

export const GetUserDetail=function (callback) {
    firebaseApp.auth().onAuthStateChanged(function(user) {
        if (!user) {
            callback(null);
        }
        else
        {
            callback(user);
        }
    });
};

export const SendVerificationMail=function(user, callback)
{
    user.sendEmailVerification().then(function () {
        callback(true);
    }, function (error) {
        callback(false);
    });
};

