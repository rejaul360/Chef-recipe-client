// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5wBpPK7KtL3aAFABd234a7oEm7abB9eA",
  authDomain: "chef-recipe-hunter-1af5d.firebaseapp.com",
  projectId: "chef-recipe-hunter-1af5d",
  storageBucket: "chef-recipe-hunter-1af5d.appspot.com",
  messagingSenderId: "504762440614",
  appId: "1:504762440614:web:88c929afb9e6ab42da0d67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;