import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   let history = useHistory();
   let location = useLocation();
   let { from } = location.state || { from: { pathname: "/" } };
   if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
   }
    const handleGoogleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            const {displayName,email} = result.user;
            const signedInUser = {name:displayName,email}
            setLoggedInUser(signedInUser)
            history.replace(from);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
      });
       }
    return (
        <div className="d-flex justify-content-center" style={{marginTop:'80px'}}>
           <div className="box">
               <h4 className="d-flex justify-content-center" style={{marginTop:'100px'}}>Sign up with Google</h4>
               <button style={{marginTop: '20px' ,marginLeft: '100px'}} className="btn btn-primary" onClick={handleGoogleSignIn}>Google</button>
           </div>
        </div>
    );
};

export default Login;