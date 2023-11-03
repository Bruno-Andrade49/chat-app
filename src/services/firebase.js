import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDOvRXa7kwqzL06vcLJPBw5yAz6mrr9oXI",
    authDomain: "chat-app-e6e27.firebaseapp.com",
    projectId: "chat-app-e6e27",
    storageBucket: "chat-app-e6e27.appspot.com",
    messagingSenderId: "670614042390",
    appId: "1:670614042390:web:864de4bff1b2f82f328237"
  };

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };