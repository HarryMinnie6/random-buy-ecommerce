import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAV2buq1WXBnn4NlOPcLj_mXgvoCLeJE6k",
  authDomain: "random-buy-ecommerce-191cc.firebaseapp.com",
  projectId: "random-buy-ecommerce-191cc",
  storageBucket: "random-buy-ecommerce-191cc.appspot.com",
  messagingSenderId: "411868604149",
  appId: "1:411868604149:web:be7e61fc940facdcb547bc",
  measurementId: "G-M9ZSNLTQQQ",
};

// initializing the firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
