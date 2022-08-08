import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDer9Xn4sruH99Ak_X6X8ljny34mKbKOKs",
  authDomain: "twitter-clone-4d50c.firebaseapp.com",
  projectId: "twitter-clone-4d50c",
  storageBucket: "twitter-clone-4d50c.appspot.com",
  messagingSenderId: "19197620920",
  appId: "1:19197620920:web:f52b37d93123af31d17a4d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
