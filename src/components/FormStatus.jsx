import React from "react";

const FormStatus = ({ type, message }) => (
  <div
    className={
      "notification" +
      (type === "error" ? " is-danger" : "") +
      (type === "success" ? " is-success" : "")
    }
  >
    {message}
  </div>
);

export default FormStatus;
