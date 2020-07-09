import React, { useState } from "react";
import ContactForm from "./ContactForm";
import contact from "./../util/contact.js";

const Contact = ({ parentColor, showNameField, buttonText }) => {
  const [status, setStatus] = useState();

  const onSubmit = ({ name, email, message }) => {
    setStatus({ type: "pending" });

    contact.submit({ name, email, message }).then(() => {
      setStatus({
        type: "success",
        message: "Your message has been sent! We'll get back to you soon.",
      });
    });
  };
  return (
    <ContactForm
      parentColor={parentColor}
      showNameField={showNameField}
      buttonText={buttonText}
      onSubmit={onSubmit}
      status={status}
    />
  );
};

export default Contact;
