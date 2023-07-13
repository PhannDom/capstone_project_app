import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/index";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(
      "🚀 ~ file: sign-in.component.tsx:12 ~ logGoogleUser ~ userDocRef:",
      userDocRef
    );
  };
  return (
    <>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </>
  );
};

export default SignIn;
