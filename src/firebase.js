import firebase from "firebase/app";
import  'firebase/firestore';
import 'firebase/auth';
// import 'firebase/database';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCPsA8vn-pOQiXShfl5eKJIJuZ2c4BTpng",
  authDomain: "whatsapp-clone-86ea3.firebaseapp.com",
  projectId: "whatsapp-clone-86ea3",
  storageBucket: "whatsapp-clone-86ea3.appspot.com",
  messagingSenderId: "121234557476",
  appId: "1:121234557476:web:900f2453faadce388b66b1",
  measurementId: "G-R7L1FZN4RP"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();
const provider  = new firebase.auth.GoogleAuthProvider();

export { auth , database, provider };
