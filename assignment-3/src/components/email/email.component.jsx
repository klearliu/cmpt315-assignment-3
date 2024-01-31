// email.component.jsx
import React, { useState } from "react";
import "./email.style.css";

export const Email = ({ emailInfo }) => {
  const { from, address, time, message, subject, read } = emailInfo;

  // tracking read status from json
  const [isRead, setIsRead] = useState(read === "true");
  const [displayMessage, setDisplayMessage] = useState(false);

  const emailContainerClass = `email-container${isRead ? " unread" : ""}`;

  // This is assuming the readers do not refresh
  const handleClick = () => {
    if (!isRead) setIsRead(true);

    // Toggle the displayMessage state to show/hide the message
    setDisplayMessage(!displayMessage);
  };

  return (
    <div className={emailContainerClass} onClick={handleClick}>
      <h2>{from}</h2>
      <h2>{subject}</h2>
      <p>{address}</p>
      <p>{time}</p>

      {displayMessage && (
        <div>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};
