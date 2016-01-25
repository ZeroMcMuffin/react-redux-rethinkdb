import * as types from 'constants/action-types';

export function sendMessage(text) {
  return {
    type: types.SEND_MESSAGE,
    text
  };
}

export function initialMessages(messages) {
  return {
    type: types.INITIAL_MESSAGES,
    messages
  }
}

export function receiveMessages(messages) {
  return {
    type: types.RECEIVE_MESSAGES,
    messages
  }
}


