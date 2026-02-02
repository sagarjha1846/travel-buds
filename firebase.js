// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZKEchkSDZyanBaLdHl5_gzN7WaiJ2vRM",
  authDomain: "travel-buds-f62ec.firebaseapp.com",
  projectId: "travel-buds-f62ec",
  storageBucket: "travel-buds-f62ec.firebasestorage.app",
  messagingSenderId: "507293024748",
  appId: "1:507293024748:web:c3d2e7d342d59b8f0240c9",
  measurementId: "G-X8M7EHBF0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };