console.log("Firebase config:", firebaseConfig);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN, // ✅ FIXED
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,   // ✅ FIXED
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET, // ✅ FIXED
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID, // ✅ FIXED
  appId: process.env.REACT_APP_FIREBASE_APP_ID,           // ✅ FIXED
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


