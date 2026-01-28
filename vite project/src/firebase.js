// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "manrajestate-5e21f.firebaseapp.com",
  projectId: "manrajestate-5e21f",
  storageBucket: "manrajestate-5e21f.appspot.com",  // yahan .appspot.com hona chahiye
  messagingSenderId: "428183625723",
  appId: "1:428183625723:web:ac536371e2613a9a7df55e",
  measurementId: "G-MH5R19SPRE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Auth (agar login use kar raha hai)
export const auth = getAuth(app);

// Storage (image upload ke liye)
export const storage = getStorage(app);
