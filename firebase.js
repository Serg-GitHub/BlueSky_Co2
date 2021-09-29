// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjCSRhWmWqutTszA6-XTq7tkxo4ksDdH0",
    authDomain: "blueskyco2-515fb.firebaseapp.com",
    projectId: "blueskyco2-515fb",
    storageBucket: "blueskyco2-515fb.appspot.com",
    messagingSenderId: "475843843899",
    appId: "1:475843843899:web:6e342b79fea4e8a255891e",
    measurementId: "G-YWN683CKRP"
  };

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
} 
const auth = firebase.auth()
// const analytics = getAnalytics(app);

export { auth } ;
