//message.component.jsx

import React from "react";

const MessageComponent = ({ messages }) => {
  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <h3>{message.subject}</h3>
          <p>From: {message.from}</p>
          <p>Time: {message.time}</p>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageComponent;
