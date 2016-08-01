class App.Views.Footer extends App.Models.Base
  constructor: (opts = {}) ->
    super opts

  render: ->
    year = new Date().getFullYear()
    $('#current_year').text year