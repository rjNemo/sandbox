import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const ContentSection = ({
  color,
  size,
  backgroundImage,
  backgroundImageOpacity,
  title,
  subtitle,
}) => (
  <Section
    color={color}
    size={size}
    backgroundImage={backgroundImage}
    backgroundImageOpacity={backgroundImageOpacity}
  >
    <div className="container">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        centered={true}
        size={2}
      />
    </div>
  </Section>
);

export default ContentSection;
