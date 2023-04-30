import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4z2mM9t2evjo9PXg9OTGmN0lG5CgYQ40",
  authDomain: "line-clone-21acc.firebaseapp.com",
  projectId: "line-clone-21acc",
  storageBucket: "line-clone-21acc.appspot.com",
  messagingSenderId: "477005434362",
  appId: "1:477005434362:web:49779370be751ee1d0a843"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};