import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDfyao9utp0rJ8jvpkCJRpqfyvxSD5tV_Y",
    authDomain: "react-shop-db-be856.firebaseapp.com",
    databaseURL: "https://react-shop-db-be856.firebaseio.com",
    projectId: "react-shop-db-be856",
    storageBucket: "react-shop-db-be856.appspot.com",
    messagingSenderId: "44830034859",
    appId: "1:44830034859:web:eac024b4b19f0479d120ee",
    measurementId: "G-W8QSZHCX79"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();

  // Signin with selected account on Google
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
