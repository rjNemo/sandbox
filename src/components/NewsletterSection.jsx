import React from "react";
import Section from "./Section";
import Newsletter from "./Newsletter";

const NewsletterSection = ({
  color,
  size,
  title,
  subtitle,
  buttonText,
  inputPlaceholder,
  subscribedMessage,
}) => (
  <Section color={color} size={size}>
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-12 is-10-fullhd">
          <div className="columns is-vcentered">
            <div className="column is-half">
              <div className="title">{title}</div>
              <div className="subtitle">{subtitle}</div>
            </div>
            <div className="column is-half">
              <Newsletter
                parentColor={color}
                buttonText={buttonText}
                inputPlaceholder={inputPlaceholder}
                subscribedMessage={subscribedMessage}
                size="medium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default NewsletterSection;
