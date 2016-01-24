defmodule ReactRethinkdb.PageController do
  use ReactRethinkdb.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
