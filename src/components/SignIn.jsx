import React, { useState } from "react";
import Auth from "./Auth";
import { useAuth } from "./../util/auth.js";

const SignIn = ({ onSignin, buttonText, parentColor }) => {
  const auth = useAuth();
  const [status, setStatus] = useState();

  const onSubmit = ({ email, pass }) => {
    setStatus({ type: "pending" });
    auth
      .signin(email, pass)
      .then((user) => {
        onSignin && onSignin();
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
      mode="signin"
      buttonText={buttonText}
      parentColor={parentColor}
      onSubmit={onSubmit}
      status={status}
    />
  );
};

export default SignIn;
