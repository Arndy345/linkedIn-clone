import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQBzj3lFFAcUE7UpIIWnWShYKyClTUpDw",
  authDomain: "linkedin-clones-96d6b.firebaseapp.com",
  projectId: "linkedin-clones-96d6b",
  storageBucket: "linkedin-clones-96d6b.appspot.com",
  messagingSenderId: "197959742888",
  appId: "1:197959742888:web:ceb6d50bb89c775fe8d99d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
