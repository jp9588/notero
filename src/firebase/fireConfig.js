import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBjLcVBhMm3uO2GU7hm1M62upRwVShUjzo",
    authDomain: "journal-df127.firebaseapp.com",
    projectId: "journal-df127",
    storageBucket: "journal-df127.appspot.com",
    messagingSenderId: "720165222825",
    appId: "1:720165222825:web:c939f83e93ba35c42dacb8",
    measurementId: "G-M83Q82F74P"
  };

  var firebaseConfigTest = {
    apiKey: "AIzaSyCxGUXzcvxWmjsgU3VaZwzosb58zrty6lY",
    authDomain: "testing-journal-2258f.firebaseapp.com",
    projectId: "testing-journal-2258f",
    storageBucket: "testing-journal-2258f.appspot.com",
    messagingSenderId: "719759008678",
    appId: "1:719759008678:web:711141c99c695fbcc2a567"
  };






  if(process.env.NODE_ENV==='test'){
    // Initialize Firebase test
    firebase.initializeApp(firebaseConfigTest);
       
  }else{
    firebase.initializeApp(firebaseConfig);
  }




  

 
  

  const db= firebase.firestore();
  const googleAuthProvider= new firebase.auth.GoogleAuthProvider();


  export {db, googleAuthProvider, firebase};