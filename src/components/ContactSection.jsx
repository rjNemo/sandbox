import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Contact from "./Contact";
import "./ContactSection.scss";

const ContactSection = ({
  color,
  size,
  title,
  subtitle,
  showNameField,
  buttonText,
}) => (
  <Section color={color} size={size}>
    <div className="ContactSection__container container">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        centered={true}
        size={3}
      />
      <Contact
        parentColor={color}
        showNameField={showNameField}
        buttonText={buttonText}
      />
    </div>
  </Section>
);

export default ContactSection;
