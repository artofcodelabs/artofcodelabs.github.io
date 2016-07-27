class App.Views.Page extends App.Models.Base
  constructor: (opts = {}) ->
    super opts

  render: ->
    windowHeight = $(window).height()
    $('div.page').css 'height', windowHeight