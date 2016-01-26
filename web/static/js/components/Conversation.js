import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

let listStyle = {
  maxHeight: '200px',
  overflowY: 'scroll'
};

export default class Conversation extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.handleScrollDown();
  }

  componentDidUpdate() {
    this.handleScrollDown();
  }

  render(){
    const messageList = renderList(this.props.messages, this.props.name);
    return (
      <div id="chat-container" style={listStyle}>
        {messageList}
      </div>
    );
  }

  handleScrollDown() {
    var chatDiv = document.getElementById("chat-container");
    chatDiv.scrollTop = chatDiv.scrollHeight;
  };
}

const renderList = (
  messages = [], name = ''
    ) => {
      return (
        <div className="list-unstyled" >
          {messages.map( (message, index) =>
              <li key={index}>
                {message.name === name ? 'You' : message.name}: {message.text}
              </li>
          )}
        </div>
      );
};

export default Conversation;