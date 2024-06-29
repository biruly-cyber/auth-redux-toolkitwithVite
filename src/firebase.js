// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyAV4fy2SkCbSDBUxvSHKVCZRUaszFYm5UU",
  authDomain: "mern-auth-dd1d7.firebaseapp.com",
  projectId: "mern-auth-dd1d7",
  storageBucket: "mern-auth-dd1d7.appspot.com",
  messagingSenderId: "575381535668",
  appId: "1:575381535668:web:6949c679751da79225d0e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);