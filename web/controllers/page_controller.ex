defmodule ReactRethinkdb.PageController do
  use ReactRethinkdb.Web, :controller
  require Logger

  def index(conn, _params) do
    RethinkDB.Connection.start_link([host: "127.0.0.1", port: 28015])
    render conn, "index.html"
  end
end
