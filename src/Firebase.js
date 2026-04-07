import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkHf65rJqe9YnrGslqkl3Y4FXsvq9Aitw",
  authDomain: "parker-foundation.firebaseapp.com",
  projectId: "parker-foundation",
  storageBucket: "parker-foundation.appspot.com",
  messagingSenderId: "211131675241",
  appId: "1:211131675241:web:58a9f98d1aac6b7a53a8f8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
