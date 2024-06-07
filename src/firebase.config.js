// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQlh2O6xQpYpr_yYVxJI7HeIDcUOu05Qg",
  authDomain: "react-contact-ecc54.firebaseapp.com",
  projectId: "react-contact-ecc54",
  storageBucket: "react-contact-ecc54.appspot.com",
  messagingSenderId: "746555134500",
  appId: "1:746555134500:web:5566e63ec27750124e7eb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);