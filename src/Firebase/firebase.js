// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8nSnVQptwF8wiEIPfiMF2B3jInu40e_8",
  authDomain: "rise-5d1b3.firebaseapp.com",
  projectId: "rise-5d1b3",
  storageBucket: "rise-5d1b3.appspot.com",
  messagingSenderId: "532425643504",
  appId: "1:532425643504:web:79c239362df0ef48d0b935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);