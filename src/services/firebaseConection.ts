import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoTblrtdbSKAETfXo_36XzFxf7UKZvh5o",
  authDomain: "tasksplus-472be.firebaseapp.com",
  projectId: "tasksplus-472be",
  storageBucket: "tasksplus-472be.firebasestorage.app",
  messagingSenderId: "500010461864",
  appId: "1:500010461864:web:074ff550e844119be1709d"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseapp);

export {db};