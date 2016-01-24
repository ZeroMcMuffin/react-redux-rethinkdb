import { SEND_MESSAGE } from 'constants/ActionTypes';

const initialState = {
  messages: []
};

export default function chat(state = initialState, action) {
  console.log(action.text);
  console.log(state.messages);
  switch (action.type) {
  case SEND_MESSAGE:
      return Object.assign({},
        state,
        {
          messages: [...state.messages, {id: null, text: action.text}]
        }
      );

  default:
    return state;
  }
}



