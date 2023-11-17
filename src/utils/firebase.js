// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-4c01d.firebaseapp.com",
  projectId: "blog-4c01d",
  storageBucket: "blog-4c01d.appspot.com",
  messagingSenderId: "1027666465988",
  appId: "1:1027666465988:web:d954f3453cbfa59e20a591",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
