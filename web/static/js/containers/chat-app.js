import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Conversation from 'components/conversation';
import Input from 'components/text-input';
import * as ChatActions from 'actions/chat-actions';

class ChatApp extends Component {

  render() {
    const { chat, actions } = this.props;
    const status = (chat.connected) ? 'Connected as ' + chat.name  : 'Offline';
    const chatPane = (chat.connected)
      ? renderChat(chat.messages, chat.name, ::this.handleSubmit)
      : renderLogin(actions.connect);

    return (
      <div className="col-md-6">
        <div>
          {status}
        </div>
        {chatPane}
      </div>
    );
  }

  handleSubmit(value) {
    const { chat, actions } = this.props;
    actions.sendMessage(chat.name, value);
  }
}

const renderLogin = (connectAction) => {
  return (
    <div className="form-group">
        <label htmlFor="login" className="control-label">Login
          <Input id="login" placeholder="Enter Name" onSubmit={connectAction} />
        </label>
    </div>
  );
};

const renderChat = (messages, name, handleSubmit) =>  {
  return (
    <div className="form-group">
      <Conversation name={name} messages={messages} />
      <Input placeholder="Send a message" onSubmit={handleSubmit} />
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
