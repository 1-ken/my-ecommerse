import * as firebase from "firebase";

import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_ik_TkqoQJJTACsTfguHNE-79MvPbzBM",
  authDomain: "product-541b2.firebaseapp.com",
  databaseURL: "https://product-541b2-default-rtdb.firebaseio.com",
  projectId: "product-541b2",
  storageBucket: "product-541b2.appspot.com",
  messagingSenderId: "723373483921",
  appId: "1:723373483921:web:a5fa9f62e100a0b1a2dc30",
  measurementId: "G-1LG47GTKYT",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
