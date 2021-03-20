import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnYQuIVfMXZW_-nVkO7DS7OjRQ4WO2Kts",
  authDomain: "search-and-buy.firebaseapp.com",
  databaseURL: "https://search-and-buy-default-rtdb.firebaseio.com",
  projectId: "search-and-buy",
  storageBucket: "search-and-buy.appspot.com",
  messagingSenderId: "648869467094",
  appId: "1:648869467094:web:84de59c909add3e3daca77",
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const productsCollection = db.collection("products");

// export utils/refs
export { db, auth, productsCollection };
