// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEwmuUmnxqu8DUkfzA_jP5UOt7Tl2-jrU",
  authDomain: "blogging-app-6921a.firebaseapp.com",
  projectId: "blogging-app-6921a",
  storageBucket: "blogging-app-6921a.appspot.com",
  messagingSenderId: "568702815866",
  appId: "1:568702815866:web:795eea6f332724bb9135c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);