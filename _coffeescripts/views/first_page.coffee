class App.Views.FirstPage extends App.Models.Base
  constructor: (opts = {}) ->
    super opts
    @windowHeight = $(window).height()

  render: ->
    $('#first_page > .row:first').css 'min-height', @windowHeight * 0.9
    $('#first_page > .row:last').css 'min-height', @windowHeight * 0.1