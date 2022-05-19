// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqnKcgctSRAsh3dzoy5tkA3VQLlLwumBU",
  authDomain: "miniblog-4ffe4.firebaseapp.com",
  projectId: "miniblog-4ffe4",
  storageBucket: "miniblog-4ffe4.appspot.com",
  messagingSenderId: "863678262519",
  appId: "1:863678262519:web:ff94805250883e65dbf7f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }