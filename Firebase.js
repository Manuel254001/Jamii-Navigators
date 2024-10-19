// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWSkpxrzdzNCG3k9ED2faz2TrLHnqHrrE",
  authDomain: "jamiinavigators.firebaseapp.com",
  projectId: "jamiinavigators",
  storageBucket: "jamiinavigators.appspot.com",
  messagingSenderId: "364979811469",
  appId: "1:364979811469:web:db844fd63b08e1c8201ec4",
  measurementId: "G-3QE3BBG8SM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);