// DO NOT SHERE THIS FILE PUBLICLY 


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoEI-x2W-4j20ztoYH_2QI7sJY06sc2TM",
  authDomain: "simple-firebase-auth-b44ba.firebaseapp.com",
  projectId: "simple-firebase-auth-b44ba",
  storageBucket: "simple-firebase-auth-b44ba.firebasestorage.app",
  messagingSenderId: "916758823447",
  appId: "1:916758823447:web:6d9a390fa66847ba091252"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);