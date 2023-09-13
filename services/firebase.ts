import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import  {getFirestore} from 'firebase/firestore';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,} from "firebase/auth";

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

export function signIn(usuario: string, senha: string) {
  return signInWithEmailAndPassword(auth, usuario, senha);
}

export function CreateUser(usuario: string, senha: string) {
  return createUserWithEmailAndPassword(auth, usuario, senha);
}