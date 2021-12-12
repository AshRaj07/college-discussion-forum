import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB9TKgKyGvmnE3rT9OSWc688YczQqiJ-zE",
    authDomain: "gcet-qna-forum.firebaseapp.com",
    projectId: "gcet-qna-forum",
    storageBucket: "gcet-qna-forum.appspot.com",
    messagingSenderId: "367640025478",
    appId: "1:367640025478:web:88d3b7336858a95560f407",
    measurementId: "G-YN5BQMBVM8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const gprovider = new firebase.auth.GoogleAuthProvider();
const fprovider = new firebase.auth.FacebookAuthProvider();
const db = firebaseApp.firestore();

export { auth, gprovider,fprovider };
export default db;