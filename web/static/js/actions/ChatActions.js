import * as types from 'constants/ActionTypes';

export function sendMessage(text) {
  return {
    type: types.SEND_MESSAGE,
    text
  };
}


