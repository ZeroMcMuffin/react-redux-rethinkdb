import JoinChannel from 'utils/join-channel';
import * as types from 'constants/action-types';

let channel; // should i put this in the state tree?

export function connect(name) {
  return function(dispatch) {
    channel = JoinChannel( "chat:lobby" );
    channel.on( "initial_messages", messages => { // Inflate the messages
      dispatch( {type: types.CONNECT, name: name} );
      dispatch( {type: types.INITIAL_MESSAGES, messages: messages.data} );
    });

    channel.on( "new_messages", messages => {  // Add new messages
      dispatch( {type: types.RECEIVE_MESSAGES, messages: messages.data} );
    });
  }
}

export function sendMessage(name, text) {
  let message = {text, name, created: Date.now()};
  channel.push("new_message", {body: message});
  return {
    type: types.SEND_MESSAGE,
    message
  };
}



