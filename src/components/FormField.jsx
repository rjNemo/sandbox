import React from "react";

const FormField = ({ type, value, placeholder, onChange, error }) => (
  <div className="field">
    <div className="control">
      {type === "textarea" && (
        <textarea
          className="textarea is-medium"
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      )}

      {type !== "textarea" && (
        <input
          className="input is-medium"
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </div>

    {error && <p className="help is-danger">{error.message}</p>}
  </div>
);

export default FormField;
