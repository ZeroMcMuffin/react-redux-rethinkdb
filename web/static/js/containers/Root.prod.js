import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ChatApp from './chat-app';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <ChatApp />
      </Provider>
    );
  }
}
