
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics"; // We can add this later if needed

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiCxEWPpY49mnP4x3PxLAFUPZERXRGKGQ",
  authDomain: "insta-ce036.firebaseapp.com",
  projectId: "insta-ce036",
  storageBucket: "insta-ce036.firebasestorage.app",
  messagingSenderId: "376072830421",
  appId: "1:376072830421:web:b56e1645cd979c98d5115c",
  measurementId: "G-P2DB4HYMJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // We can enable analytics later

export const auth = getAuth(app);
export const database = getDatabase(app);

