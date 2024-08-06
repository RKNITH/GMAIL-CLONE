// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// import { getDatabse } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNpC0MRz2Wsg-woITRLQPTB8cR-ZKjfd0",
    authDomain: "clone-831cd.firebaseapp.com",
    projectId: "clone-831cd",
    storageBucket: "clone-831cd.appspot.com",
    messagingSenderId: "393272195650",
    appId: "1:393272195650:web:c49501e5c632126b8c4bdb",
    measurementId: "G-WBST1T47MQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()