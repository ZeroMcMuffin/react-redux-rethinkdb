'use strict';

let r = require('rethinkdb');
let config ={
  host: 'localhost',
    port: 28015,
  authKey: ''
};

//todo: remove configuration from code
r.connect(config).then(function(conn){
  return r.dbCreate('chat').run(conn)
    .then(function(){
      console.log("Database created!");
      return conn;
  });
}).then(function(conn){
  return r.db('chat').tableCreate('messages').run(conn);
}).then(function(){
  console.log('Table created!');
  process.exit(0);
}).error(function(err){
  console.error("Error creating rethink db ", err);
  process.exit(1);
});

