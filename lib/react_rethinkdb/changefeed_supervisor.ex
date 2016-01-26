defmodule ReactRethinkdb.ChangefeedSupervisor do
  use Supervisor

  def start_link do
    Supervisor.start_link(__MODULE__, :ok, [name: __MODULE__])
  end

  def init(:ok) do
    children = [
      worker(ReactRethinkdb.MessagesChangefeed,
      [ReactRethinkdb.Database, [port: 28015, host: :localhost, db: :chat, sync_connect: :true, name: ReactRethinkdb.MessagesChangefeed]])
    ]

    supervise(children, strategy: :one_for_one)
  end
end