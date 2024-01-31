// email.component.jsx
import React from "react";
import "./email.style.css";

export const Email = ({ emailInfo }) => {
  const { id, from, address, time, message, subject, tag, read } = emailInfo;
  return (
    <div className="email-container">
      <h2>{from}</h2>
      <p>{subject}</p>
      <p>{address}</p>
      <p>{time}</p>
    </div>
  );
};
