# React, Redux, Elixir, Phoenix, RethinkDB Demo
## Chat Example

  This is a tech demo for using several technologies that I'm interested in.  The stack
  currently includes React, Redux, Elixir, Phoenix, and RethinkDB.  
  
## Where is Angular 2?
  This started out as an Angular 2 application and was well on its way to completion when I got stuck.  The solution 
  seemed to lie in switching to JSPM, though I'm not sure why.  Time was ticking.  After learning more
  tools than I care to mention related to modules and asset management...I decided to go back to React with the
  hope that the additional productivity from a tool I know would make up for the lack of expertise I have with
  Phoenix, Elixir, and RethinkDB.  This was a fairly ambitious effort given my lack of familiarity with some of the 
  key components and only having a few days to complete it.
  
 
## Dependencies
  * [Install Elixir](http://elixir-lang.org/install.html)
  * [Install Phoenix](http://www.phoenixframework.org/docs/installation)
  * [Install RethinkDB](https://www.rethinkdb.com/docs/install/) and create a database called 'chat' with a single table of 'messages'.
    With some more time, I'll automate the database and table creation, but the daemon will need to be run
    in either scenario.

## Starting the Server
  * With the RethinkDB daemon running, execute the db setup script `node db-setup.js`
  * From the project root, install dependencies with `mix deps.get`  
  * Start Phoenix endpoint with `mix phoenix.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.


