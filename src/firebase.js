import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCUBtlTAA1tAlqzd-jJy_IvXgYqcYUlyzs",
  authDomain: "clone-e56ad.firebaseapp.com",
  projectId: "clone-e56ad",
  storageBucket: "clone-e56ad.appspot.com",
  messagingSenderId: "23697372090",
  appId: "1:23697372090:web:e718de0583c21ecc022383",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
