import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAHExHfMDRu2lVecgYxgW86TXDF-dvsWrY",
//   authDomain: "personal-finance-tracker-ec56e.firebaseapp.com",
//   projectId: "personal-finance-tracker-ec56e",
//   storageBucket: "personal-finance-tracker-ec56e.appspot.com",
//   messagingSenderId: "669303047696",
//   appId: "1:669303047696:web:5b4b41cc896752c03e6c95",
//   measurementId: "G-7X36E69HYW",
// };
const firebaseConfig = {
  apiKey: "AIzaSyANAEuZhV4RYdLjN2ozPGdYckPnUbx6-_g",
  authDomain: "expensetracker-be21b.firebaseapp.com",
  projectId: "expensetracker-be21b",
  storageBucket: "expensetracker-be21b.appspot.com",
  messagingSenderId: "138947680460",
  appId: "1:138947680460:web:0c74bb443f38d65c68ca69",
  measurementId: "G-5KYJ489CXR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
