import React, { Component, PropTypes } from 'react';
import ChatTextInput from 'components/chat-text-input';

export default class ChatInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);
  }

  handleSubmit(text) {
    this.props.onSubmit(text);
  }

  render() {
    return (
      <div>
        <ChatTextInput placeholder={this.props.placeholder} onSubmit={::this.handleSubmit} />
      </div>
    );
  }
}
