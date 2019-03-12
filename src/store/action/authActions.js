import actionTypes from './actionTypes'
import {auth,db,fireApp} from '../../component/config'
import * as firebase from 'firebase'

export function Signup(signupDetail){
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(signupDetail.email, signupDetail.pass)
        .then((user)=> {
            let userDetails={
                useremail: signupDetail.email,
                userpass: signupDetail.pass, // use for admin later
                username : signupDetail.name
            }
            var currUser = firebase.auth().currentUser.uid;
            firebase.database().ref('users/' + currUser).set(userDetails);
            firebase.database().ref('users/' + currUser).on('value', (snapshot) => {
                var obj = snapshot.val();
                dispatch(SigninActionTypes(obj));
                console.log('firebase obj values: ',obj)

            });
            console.log( "Firebase response", user)
        })
        .catch((e)=>{
            // var err = 
            console.log("error",e)
        })
    }
}

export function signinAction(signinDetail){
    return dispatch =>{
        firebase.auth().signInWithEmailAndPassword(signinDetail.email, signinDetail.pass)
        .then((user) => {
            var currUser = firebase.auth().currentUser.uid;
            firebase.database().ref('users/' + currUser).on('value', (snapshot) => {
                var obj = snapshot.val();
                dispatch(SigninActionTypes(obj));
                console.log('firebase obj values: ',obj)
                console.log('firebase signin values: ',signinAction.payload)
            });
            console.log( "logged in succesfully", user)
        })
        .catch((e)=>{
            console.log("Succesfully Logged in failed with ", e)
        })
    }
}

export function Signout(){
    return dispatch => {
        firebase.auth().signOut()
        .then((e)=>{
            console.log('signed out ' ,e)
        })
        .catch((e)=>{
            console.log('signed out err', e)
        })
    }
}

export function SigninActionTypes(payload){
    return {
        type: actionTypes.SIGNIN,
        payload
    }
    
}