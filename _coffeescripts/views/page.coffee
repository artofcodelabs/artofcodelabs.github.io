class App.Views.Page extends App.Models.Base
  constructor: (opts = {}) ->
    super opts
    @windowHeight = $(window).height()

  render: ->
    $('div.page').css 'min-height', @windowHeight