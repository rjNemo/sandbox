import React from "react";
import "./SectionHeader.scss";

const SectionHeader = ({ title, subtitle, centered, size }) => (
  <>
    {(title || subtitle) && (
      <header
        className={"SectionHeader__header" + (centered ? " is-centered" : "")}
      >
        {title && (
          <h1
            className={
              "title is-spaced has-text-weight-bold" +
              (size ? ` is-${size}` : "") +
              (size === 1 ? " is-size-2-mobile" : "")
            }
          >
            {title}
          </h1>
        )}

        {subtitle && (
          <p className={"subtitle" + (size > 4 ? " is-6" : "")}>{subtitle}</p>
        )}
      </header>
    )}
  </>
);

export default SectionHeader;
