# React, Redux, Elixir, Phoenix, RethinkDB Chat Demo

If one were to attempt to name this stack, the best they might do would be something like PE3R (pear) or PERRR (purr).  If one were to do such a thing...

This is example is incredibily shallow and only represents most of the wiring you might use to get these pieces to work together.  If you have suggestions for improving things, I'm all ears!
 
## Dependencies
  * [Install Elixir](http://elixir-lang.org/install.html)
  * [Install Phoenix](http://www.phoenixframework.org/docs/installation)
  * [Install RethinkDB](https://www.rethinkdb.com/docs/install/) 
  * [Install Node.js 5.0](https://nodejs.org/en/download/)

## Starting the Server
  * From the project root, install Elixir dependencies with `mix deps.get`  
  * Install Node.js dependencies: `npm install`
  * With the RethinkDB daemon running, execute the db setup script `node setup-db.js`
  * Start Phoenix endpoint with `mix phoenix.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.


