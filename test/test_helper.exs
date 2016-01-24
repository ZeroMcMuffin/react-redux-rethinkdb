ExUnit.start

Mix.Task.run "ecto.create", ~w(-r ReactRethinkdb.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r ReactRethinkdb.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(ReactRethinkdb.Repo)

