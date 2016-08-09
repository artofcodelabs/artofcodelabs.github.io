class App.Views.FourthPage extends App.Models.Base
  constructor: (opts = {}) ->
    super opts
    @windowHeight = $(window).height()

  render: ->
    $('#fourth_page > .row:first').css 'min-height', @windowHeight
