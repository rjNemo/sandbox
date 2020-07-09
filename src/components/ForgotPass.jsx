import React, { useState } from "react";
import Auth from "./Auth";
import { useAuth } from "./../util/auth.js";

const ForgotPass = ({ buttonText, parentColor }) => {
  const auth = useAuth();
  const [status, setStatus] = useState();

  const onSubmit = ({ email }) => {
    setStatus({ type: "pending" });
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setStatus({
          type: "success",
          message: "Password reset email sent",
        });
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
      mode="forgotpass"
      buttonText={buttonText}
      parentColor={parentColor}
      onSubmit={onSubmit}
      status={status}
    />
  );
};

export default ForgotPass;
