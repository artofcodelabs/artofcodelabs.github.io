class App.Views.LastPage extends App.Models.Base
  constructor: (opts = {}) ->
    super opts
    @windowHeight = $(window).height()
    @num = 0.618033989

  render: ->
    $('#last_page').css 'min-height', (@windowHeight - 16) * @num * @num
    $('#last_page > .row:first').css 'min-height', (@windowHeight - 16) * @num * @num