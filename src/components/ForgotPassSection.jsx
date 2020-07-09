import React from "react";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import ForgotPass from "./ForgotPass";

const ForgotPassSection = ({ color, size, title, subtitle, buttonText }) => (
  <Section color={color} size={size}>
    <div className="container">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        centered={true}
        size={3}
      />
      <ForgotPass buttonText={buttonText} parentColor={color} />
    </div>
  </Section>
);

export default ForgotPassSection;
