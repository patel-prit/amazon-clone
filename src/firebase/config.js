import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAYnyuzSxMV00Qt4hDom3fdd51xx9M4-k",
  authDomain: "clone-f4a52.firebaseapp.com",
  projectId: "clone-f4a52",
  storageBucket: "clone-f4a52.appspot.com",
  messagingSenderId: "677218570765",
  appId: "1:677218570765:web:23357c1535aef82ae37b44",
  measurementId: "G-ETJ66BHDFF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
