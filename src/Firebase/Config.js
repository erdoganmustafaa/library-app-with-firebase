import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBI5y7IETiQov-15FPcJbutSncZZQxsHF8",
    authDomain: "fir-kitaplik-app.firebaseapp.com",
    projectId: "fir-kitaplik-app",
    storageBucket: "fir-kitaplik-app.appspot.com",
    messagingSenderId: "755449249879",
    appId: "1:755449249879:web:79211912cb04a1c90c6312"
  };

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
export {db,auth};