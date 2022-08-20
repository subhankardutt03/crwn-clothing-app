// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCp8oVPTeTDsx0NMGxeC-fZu7mkuevkFN8",
  authDomain: "crwn-clothing-db-37cad.firebaseapp.com",
  projectId: "crwn-clothing-db-37cad",
  storageBucket: "crwn-clothing-db-37cad.appspot.com",
  messagingSenderId: "881764843775",
  appId: "1:881764843775:web:02bce1a8de830e9fbf0cca",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = getDoc(userDocRef);
  console.log(userSnapshot);
  console.log((await userSnapshot).exists());

  //   if user snapshot doesnot exists
  if (!(await userSnapshot).exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error message is displaying", error.message);
    }
  }

  return userDocRef;
};
