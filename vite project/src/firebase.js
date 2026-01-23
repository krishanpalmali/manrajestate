// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "manrajestate-5e21f.firebaseapp.com",
  projectId: "manrajestate-5e21f",
  storageBucket: "manrajestate-5e21f.firebasestorage.app",
  messagingSenderId: "428183625723",
  appId: "1:428183625723:web:ac536371e2613a9a7df55e",
  measurementId: "G-MH5R19SPRE"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);



