// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKPdrj-fp1cJS3B9UxVWvwWtvJwF3Uj-w",
  authDomain: "ninja-firebase-644f4.firebaseapp.com",
  projectId: "ninja-firebase-644f4",
  storageBucket: "ninja-firebase-644f4.appspot.com",
  messagingSenderId: "764478250857",
  appId: "1:764478250857:web:a864f1d5cdeba973e2e7f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
