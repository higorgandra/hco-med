import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbjUeV32PAeq73M5NUCAcBzoX1c9R9nX4",
  authDomain: "clinica-hco.firebaseapp.com",
  projectId: "clinica-hco",
  storageBucket: "clinica-hco.appspot.com",
  messagingSenderId: "189461898566",
  appId: "1:189461898566:web:5b8e8691ad22894b74f147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
export const db = getFirestore(app);