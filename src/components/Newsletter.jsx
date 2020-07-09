import React, { useState } from "react";
import SectionButton from "./SectionButton";
import newsletter from "./../util/newsletter.js";

const Newsletter = ({
  onSubscribed,
  size,
  inputPlaceholder,
  parentColor,
  buttonOnClick,
  buttonText,
  subscribedMessage,
}) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setSubscribed(true);
      // Parent component can optionally, find out when subscribed.
      onSubscribed && onSubscribed();
      // Subscribe them
      newsletter.subscribe({ email });
    }
  };

  return (
    <>
      {subscribed === false && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="field is-grouped">
            <div className="control is-expanded">
              <input
                className={`input is-${size}`}
                type="email"
                placeholder={inputPlaceholder}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="control">
              <SectionButton
                parentColor={parentColor}
                size={size}
                onClick={buttonOnClick}
              >
                {buttonText}
              </SectionButton>
            </div>
          </div>
        </form>
      )}

      {subscribed === true && <>{subscribedMessage}</>}
    </>
  );
};

export default Newsletter;
