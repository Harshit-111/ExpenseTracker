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
  apiKey: "AIzaSyDVFJHucLKVm3rfUNPnuswAm73LNreb2FY",
  authDomain: "expensetracker-bc355.firebaseapp.com",
  projectId: "expensetracker-bc355",
  storageBucket: "expensetracker-bc355.appspot.com",
  messagingSenderId: "293927592879",
  appId: "1:293927592879:web:c910faec50c4903ef3455a",
  measurementId: "G-6BKXFJHSHZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
