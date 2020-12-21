import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyATstgXfVSRTY9uGoero1b8NZjLzGo01Ko",
  authDomain: "thecart-96d13.firebaseapp.com",
  projectId: "thecart-96d13",
  storageBucket: "thecart-96d13.appspot.com",
  messagingSenderId: "565257348053",
  appId: "1:565257348053:web:b2b2ab5bd486841e92935c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);