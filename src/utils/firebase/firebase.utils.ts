import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYu3gfHfpckdig70QxtpkHtNQv-2pVyyw",
  authDomain: "crown-clothing-db-f4863.firebaseapp.com",
  projectId: "crown-clothing-db-f4863",
  storageBucket: "crown-clothing-db-f4863.appspot.com",
  messagingSenderId: "63018549954",
  appId: "1:63018549954:web:f86d44376e9dcb50c2715b",
};

const firebasaApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: any) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: firebase.utils.ts:48 ~ createUserDocumentFromAuth ~ error:",
        error
      );
    }

    return userDocRef;
  }
};
