import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ChatApp from './chat-app';
import DevTools from './dev-tools';

export default class Root extends Component {
  render() {
    console.log(this.props);
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <ChatApp />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
