import React from "react";

const Avatar = ({ image, size, alt, ...otherProps }) => (
  <figure className={"image" + (size ? ` is-${size}x${size}` : "")}>
    <img className="is-rounded" src={image} alt={alt} {...otherProps} />
  </figure>
);

export default Avatar;
