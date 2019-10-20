import React from "react";
import SignInSection from "./../../components/SignInSection";
import "./styles.scss";

function SigninPage(props) {
  return (
    <SignInSection
      color="white"
      size="large"
      title="Welcome back"
      subtitle=""
      buttonText="Sign in"
    />
  );
}

export default SigninPage;
