// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZZK_L9x8iMnEk7sPiXHuGqBYIVdfdUHE",
  authDomain: "asesoria-app-6987e.firebaseapp.com",
  projectId: "asesoria-app-6987e",
  storageBucket: "asesoria-app-6987e.appspot.com",
  messagingSenderId: "845119177146",
  appId: "1:845119177146:web:f905501b48b31c3d1f9d83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
