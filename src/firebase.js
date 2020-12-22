import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCNCttsMgeZypnlGyzjBCDzOfdbFRALMzM",
    authDomain: "random-buy-ecommerce-37454.firebaseapp.com",
    projectId: "random-buy-ecommerce-37454",
    storageBucket: "random-buy-ecommerce-37454.appspot.com",
    messagingSenderId: "216526759336",
    appId: "1:216526759336:web:89a8236114ed9cf797e99d",
    measurementId: "G-4NHNGQMXEK"
  };

// initializing the firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
