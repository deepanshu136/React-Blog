import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';


// import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1jD5F5PcQrtOvEwjoMruIGAyT5fZ3Qvk",
  authDomain: "react-blog-72541.firebaseapp.com",
  projectId: "react-blog-72541",
  storageBucket: "react-blog-72541.appspot.com",
  messagingSenderId: "145945949842",
  appId: "1:145945949842:web:ec6b3b2d5c7f9200fb184b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore=firebase.firestore();