import {Socket} from 'phoenix';
import * as ChatActions from 'actions/chat-actions';


const Connect = options => {
  let opts = Object.assign(
    {},
    { logger: ((kind, msg, data) => { console.log(`${kind}: ${msg}`, data) })},
    options
  );
  let socket = new Socket("/socket", opts);
  socket.connect();
  return socket;
};

const Channel = (socket, room) => {
  let channel = socket.channel(room, {});
  channel.join()
    .receive("ok", resp => {
      console.log("Joined successfully", resp)
    })
    .receive("timeout", () => console.log("Networking issue..."))
    .receive("error", resp => {
      console.log("Unable to join", resp)
    });

  return channel;
};

const JoinChannel = (room = 'chat:lobby', options= {}) => {
  let socket = Connect(options);
  return Channel(socket, room);
};

export default JoinChannel;

