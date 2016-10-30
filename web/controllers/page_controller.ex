defmodule PhoenixVueBoilerplate.PageController do
  use PhoenixVueBoilerplate.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
