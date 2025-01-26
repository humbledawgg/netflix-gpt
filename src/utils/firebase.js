// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpFbc9Fykv-ashzlv0tKP-z2jQAU1lWx4",
  authDomain: "netflixgpt-8b178.firebaseapp.com",
  projectId: "netflixgpt-8b178",
  storageBucket: "netflixgpt-8b178.firebasestorage.app",
  messagingSenderId: "306057439486",
  appId: "1:306057439486:web:3b272901e4fb3875ec9daf",
  measurementId: "G-H4D4DJ0KSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();