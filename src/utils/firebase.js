// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdYjizQTgEgwrWpNJEeGShdPKVNxSFrG0",
  authDomain: "bingeboxai.firebaseapp.com",
  projectId: "bingeboxai",
  storageBucket: "bingeboxai.firebasestorage.app",
  messagingSenderId: "572383503021",
  appId: "1:572383503021:web:9e0cdc005250f69d3edc24",
  measurementId: "G-5JVKRWS4FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();