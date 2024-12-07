// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "moody-364bf.firebaseapp.com",
  projectId: "moody-364bf",
  storageBucket: "moody-364bf.firebasestorage.app",
  messagingSenderId: "212016176328",
  appId: "1:212016176328:web:6433c889637cab834ed9fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
