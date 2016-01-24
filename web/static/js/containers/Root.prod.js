import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ChatApp from './ChatApp';

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
