import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Conversation from 'components/Conversation';
import ChatInput from 'components/ChatInput';
import * as ChatActions from 'actions/ChatActions';

class ChatApp extends Component {
  render() {
    const { chat, actions } = this.props;

    return (
      <div>
        <Conversation messages={chat.messages} />
        <ChatInput onSendMessage={actions.sendMessage} />
      </div>
    );
  }
}

function mapState(state) {

  return {
    chat: state.chat
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(ChatActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(ChatApp);
