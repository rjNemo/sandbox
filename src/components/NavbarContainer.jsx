import React from "react";

const NavbarContainer = ({ color, spaced, children }) => (
  <nav
    className={
      "navbar" + (color ? ` is-${color}` : "") + (spaced ? " is-spaced" : "")
    }
  >
    {children}
  </nav>
);

export default NavbarContainer;
