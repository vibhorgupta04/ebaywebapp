// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTK4kMXukhmBYKppa0VNpuUydf1rgzqj0",
  authDomain: "ebay-web-app.firebaseapp.com",
  projectId: "ebay-web-app",
  storageBucket: "ebay-web-app.appspot.com",
  messagingSenderId: "425763947626",
  appId: "1:425763947626:web:71cd20ba9963e14799b613",
  measurementId: "G-B9FVGTC4PF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

// const analytics = getAnalytics(app);

export { app, auth };
