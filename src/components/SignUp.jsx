import React, { useState } from "react";
import Auth from "./Auth";
import { useAuth } from "./../util/auth.js";

const SignUp = ({ onSignup, buttonText, parentColor }) => {
  const auth = useAuth();
  const [status, setStatus] = useState();

  const onSubmit = ({ email, pass }) => {
    setStatus({ type: "pending" });
    auth
      .signup(email, pass)
      .then((user) => {
        onSignup && onSignup();
      })
      .catch((error) => {
        setStatus({
          type: "error",
          message: error.message,
        });
      });
  };

  return (
    <Auth
      mode="signup"
      buttonText={buttonText}
      parentColor={parentColor}
      onSubmit={onSubmit}
      status={status}
    />
  );
};

export default SignUp;
