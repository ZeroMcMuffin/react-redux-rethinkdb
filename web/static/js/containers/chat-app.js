import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Conversation from 'components/conversation';
import ChatInput from 'components/chat-input';
import * as ChatActions from 'actions/chat-actions';
import JoinChannel from 'utils/join-channel';


class ChatApp extends Component {

  constructor(props, context) {
    super(props, context);
    registerCallbacks(props.actions);
  }

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

const registerCallbacks = ({initialMessages, receiveMessages}) => {
  let channel = JoinChannel("chat:lobby");
  channel.on("initial_messages", messages => { // Inflate the messages
    initialMessages(messages.data);
  });

  channel.on("new_messages", messages => {  // Add new messages
    receiveMessages(messages.data);
  });
};

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
