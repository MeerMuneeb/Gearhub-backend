// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI5OTAIT3_JF1PVdqlFj2JpzvNLJhf6MQ",
    authDomain: "gearhub-1a3f3.firebaseapp.com",
    projectId: "gearhub-1a3f3",
    storageBucket: "gearhub-1a3f3.appspot.com",
    messagingSenderId: "95659831568",
    appId: "1:95659831568:web:c178c75141352c67b0f595",
    measurementId: "G-0G4X712ZNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export the User collection
export default db;
