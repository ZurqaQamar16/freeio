import React from "react";
import "./Button.css";

const Button = ({ variant, children, onClick }) => {
  const className = `button ${variant}`;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
