// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7YIryYe2GtP7ruytyqMUbQIwGgtn1ctE",
  authDomain: "portfolio-279e9.firebaseapp.com",
  projectId: "portfolio-279e9",
  storageBucket: "portfolio-279e9.appspot.com",
  messagingSenderId: "881186651662",
  appId: "1:881186651662:web:b054ca1e72635f93b8065f",
  measurementId: "G-T76QHG9K11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);