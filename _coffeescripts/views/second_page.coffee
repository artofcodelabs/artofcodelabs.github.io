class App.Views.SecondPage extends App.Models.Base
  constructor: (opts = {}) ->
    super opts
    @windowHeight = $(window).height()

  render: ->
    $('#second_page > .row:first').css 'min-height', @windowHeight