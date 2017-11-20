class App.Views.Footer extends App.Models.Base
  constructor: (opts = {}) ->
    super opts

  render: ->
    year = new Date().getFullYear()
    document.getElementById('current_year').textContent = year