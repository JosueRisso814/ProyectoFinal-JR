import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0aYxDqRsIyTL_s5rnpsrORYB7_dZZ5XA",
  authDomain: "josushop-7d849.firebaseapp.com",
  projectId: "josushop-7d849",
  storageBucket: "josushop-7d849.appspot.com",
  messagingSenderId: "987226957580",
  appId: "1:987226957580:web:b72eb8cb9f7aab35198b29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);