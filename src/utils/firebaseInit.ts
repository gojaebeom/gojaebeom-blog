// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAexNe9mAWGK8HDHFixVcBGexR1R7UIfc0",
  authDomain: "jb-world-2188e.firebaseapp.com",
  projectId: "jb-world-2188e",
  storageBucket: "jb-world-2188e.appspot.com",
  messagingSenderId: "734451865456",
  appId: "1:734451865456:web:47b619ed45b4bc1cb9e1b5",
  measurementId: "G-FMSG02NDTZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
