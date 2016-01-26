defmodule ReactRethinkdb.MessagesChangefeed do
  use RethinkDB.Changefeed

  require Logger

  import RethinkDB.Lambda
  import RethinkDB.Query


  def start_link(opts, gen_server_opts \\ []) do
    RethinkDB.Changefeed.start_link(__MODULE__, opts, gen_server_opts)
  end

  def get(pid \\ __MODULE__) do
      RethinkDB.Changefeed.call(pid, :get)
  end

  def insert_message(pid \\ __MODULE__, message) do
      RethinkDB.Changefeed.cast(pid, {:insert, message})
  end

  def init(db) do
    q = table("messages")
      |> order_by(%{index: desc("id")})
      |> limit(500)
      |> changes()
    {:subscribe, q, db, {db, nil}}
  end

  def handle_update(_data, {db, nil}) do
     %{data: conversation} = table("messages")
        |> order_by(%{index: desc("id")})
        |> limit(500)
        |> RethinkDB.run(db)
     {:next, {db, conversation}}
  end

  def handle_update(message, {db, conversation}) do
    new_message = Enum.map(message, fn %{"new_val" => val} -> val end)
    new_state = Enum.concat(conversation, new_message)
    ReactRethinkdb.Endpoint.broadcast! "chat:lobby", "new_messages", %{data: new_message}
    {:next, {db, new_state}}
  end

  def handle_cast({:insert, message}, {db, conversation}) do
    Logger.debug "New message received: #{inspect message}"
    table("messages")
      |> insert(message)
      |> RethinkDB.run(db)
      {:noreply, {db, conversation}}
  end

  def handle_call(:get, _from, {db, nil}) do
    {:reply, nil, {db, nil}}
  end

  def handle_call(:get, _from, {db, conversation}) do
    {:reply, conversation, {db,conversation}}
  end
end
