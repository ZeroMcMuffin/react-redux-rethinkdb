defmodule ReactRethinkdb.DatabaseSupervisor do
  use Supervisor

  def start_link do
    Supervisor.start_link(__MODULE__, :ok, [name: __MODULE__])
  end

  def init(:ok) do
    children = [
      worker(ReactRethinkdb.Database, [[port: 28015, host: :localhost, db: :chat, sync_connect: :true]]),
      supervisor(ReactRethinkdb.ChangefeedSupervisor, [])
    ]

    supervise(children, strategy: :one_for_one)
  end
end