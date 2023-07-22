// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH1jfJh9cEfiJjWYlZNeYbd_xK4DC9uE0",
  authDomain: "press-37912.firebaseapp.com",
  projectId: "press-37912",
  storageBucket: "press-37912.appspot.com",
  messagingSenderId: "68535363539",
  appId: "1:68535363539:web:a1f2b1d890686db5a5b126",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
