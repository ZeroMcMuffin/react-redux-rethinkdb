import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from 'components/sign-in';
import Conversation from 'components/conversation';
import ChatInput from 'components/chat-input';
import * as ChatActions from 'actions/chat-actions';

class ChatApp extends Component {

  render() {
    const { chat, actions } = this.props;
    const chatPane = (chat.connected)
      ? renderChat (chat, actions)
      : <div className="form-group">
          <label>Name</label>
          <ChatInput placeholder="Enter Name" onSubmit={actions.connect} />
        </div>;

    return (
      <div className="col-md-6">
        Status: {chat.connected ? 'Connected as ' + chat.name  : 'Offline'}
        {chatPane}
      </div>
    );
  }
}

const renderChat = (chat, actions) =>  {
  return (
    <div className="form-group">
      <Conversation messages={chat.messages} />
      <ChatInput onSubmit={actions.sendMessage} />
    </div>
  );
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
