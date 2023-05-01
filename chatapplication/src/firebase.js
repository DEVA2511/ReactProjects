// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzXm1jFCsac8Kaoej-HuK1h8qpAG9k8cI",
  authDomain: "chat-e9b8f.firebaseapp.com",
  projectId: "chat-e9b8f",
  storageBucket: "chat-e9b8f.appspot.com",
  messagingSenderId: "379573403018",
  appId: "1:379573403018:web:738214748d104e5e3f9c73",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
