import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionButton from "./SectionButton";
import "./HeroSection.scss";

const HeroSection = ({
  color,
  size,
  title,
  subtitle,
  buttonOnClick,
  buttonText,
  image,
}) => (
  <Section color={color} size={size}>
    <div className="container">
      <div className="columns is-vcentered is-desktop">
        <div className="column is-5-desktop has-text-centered-touch">
          <SectionHeader title={title} subtitle={subtitle} size={1} />
          <SectionButton
            parentColor={color}
            size="medium"
            onClick={buttonOnClick}
          >
            {buttonText}
          </SectionButton>
        </div>
        <div className="column is-1" />
        <div className="column">
          <figure className="HeroSection__image image">
            <img src={image} alt="Illustration" />
          </figure>
        </div>
      </div>
    </div>
  </Section>
);

export default HeroSection;
