import React from "react";
import "./BackgroundImage.scss";

const BackgroundImage = ({ opacity, image }) => (
  <div
    className="BackgroundImage"
    style={{
      "--image": `url(${image})`,
      "--opacity": opacity,
    }}
  />
);

export default BackgroundImage;
