import React from 'react';

var listStyle = {
  maxHeight: '200px',
  overflowY: 'scroll'
};

const Conversation = ({
  messages = []
  }) => {
  return (
    <ul className="list-unstyled" style={listStyle}>
      {messages.map( (message, index) =>
        <li key={index}>{message.text}</li>
      )}
    </ul>
  );
};

export default Conversation;