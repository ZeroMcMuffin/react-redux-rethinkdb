defmodule ReactRethinkdb.ChatChannel do
  use Phoenix.Channel
  require Logger

  def join("chat:lobby", _message, socket) do
    Logger.debug "connecting..."
    send self, :after_join
    {:ok, socket}
  end

  def join("chat:" <> _private_room_id, _params, _socket) do
    {:error, %{reason: "unauthorized"}}
  end

  def handle_info(:after_join, socket) do
    conversation = ReactRethinkdb.MessagesChangefeed.get || []
    push socket, "initial_messages", %{data: conversation}
    {:noreply, socket}
  end


  def handle_in("new_message", %{"body" => body}, socket) do
    ReactRethinkdb.MessagesChangefeed.insert_message body
    {:noreply, socket}
  end

  def handle_out("new_messages", payload, socket) do
    push socket, "new_messages", payload
    {:noreply, socket}
  end

  def handle_out("initial_messages", payload, socket) do
    push socket, "initial_messages", payload
    {:noreply, socket}
  end
end