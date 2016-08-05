class App.Views.SecondPage extends App.Models.Base
  constructor: (opts = {}) ->
    super opts
    @windowHeight = $(window).height()
    @num = 1.618033989

  render: ->
    $('#second_page > .row:first').css 'min-height', @windowHeight * @num