import React from 'react';

const Conversation = ({
  messages = []
  }) => {
  return (
    <ul>
      {messages.map( (message, index) =>
        <li key={index}>{message.text}</li>
      )}
    </ul>
  );
};

export default Conversation;