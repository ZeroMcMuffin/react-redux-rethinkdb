import React, { Component, PropTypes } from 'react';
import ChatTextInput from 'components/chat-text-input';

export default class ChatInput extends Component {
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  handleSubmit(text) {
    this.props.onSendMessage(text);
  }

  render() {
    return (
      <div>
        <ChatTextInput onSubmit={::this.handleSubmit} />
      </div>
    );
  }
}
