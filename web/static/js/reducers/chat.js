import { CONNECT, SEND_MESSAGE, RECEIVE_MESSAGES, INITIAL_MESSAGES } from 'constants/action-types';

const initialState = {
  connected: false,
  messages: [],
  name: null
};

export default function chat(state = initialState, action) {
  switch (action.type) {
    case INITIAL_MESSAGES:
      return Object.assign({},
        state,
        {
          messages: action.messages
        }
      );
      break;
    case RECEIVE_MESSAGES:
      return Object.assign({},
        state,
        {
          messages: [...state.messages, ...action.messages]
        }
      );
      break;
    case SEND_MESSAGE:
      return state;
      break;
    case CONNECT:
      return Object.assign(
        {},
        state,
        {
          name: action.name,
          connected: true
        }
      );
      break;
    default:
      return state;
  }
}



