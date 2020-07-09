import React from "react";
import BackgroundImage from "./BackgroundImage";
import "./Section.scss";

const Section = ({
  color,
  size,
  backgroundImage,
  backgroundImageOpacity,
  children,
  // Passed to section element
  ...otherProps
}) => (
  <section
    className={
      "SectionComponent hero section is-block is-relative" +
      (color ? ` is-${color}` : "") +
      (size ? ` is-${size}` : "")
    }
    {...otherProps}
  >
    {backgroundImage && (
      <BackgroundImage
        image={backgroundImage}
        opacity={backgroundImageOpacity}
      />
    )}

    {children}
  </section>
);

export default Section;
