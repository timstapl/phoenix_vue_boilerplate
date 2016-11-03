defmodule PhoenixVueBoilerplate.TestEndpointController do
  use PhoenixVueBoilerplate.Web, :controller

  def index(conn, _params) do
    json conn, %{republican: 27, democrat: 29, libertarian: 5, green: 1}
  end
end
