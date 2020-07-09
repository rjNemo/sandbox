import React from "react";

const CenteredColumns = ({ children }) => (
  <div className="columns is-centered is-variable is-4 is-multiline">
    {children}
  </div>
);

export default CenteredColumns;
