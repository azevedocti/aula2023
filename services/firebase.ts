// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import  {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBd70FZXolbtL3792dfp66gAacn8EwKNc",
  authDomain: "romulo-24096.firebaseapp.com",
  projectId: "romulo-24096",
  storageBucket: "romulo-24096.appspot.com",
  messagingSenderId: "1033042866851",
  appId: "1:1033042866851:web:b7d296f4a631c029620516",
  measurementId: "G-6JLPZEV2VM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);