class App.Views.LastPage extends App.Models.Base
  constructor: (opts = {}) ->
    super opts
    @windowHeight = $(window).height()
    @num = 0.618033989
    at = '@'
    @contactEmail = 'hello' + at + 'artofcode' + '.' + 'co'

  render: ->
    $('#last_page').css 'min-height', (@windowHeight - 16) * @num * @num
    $('#last_page > .row:first').css 'min-height', (@windowHeight - 16) * @num * @num
    this._renderContactEmail()

  _renderContactEmail: ->
    b = baffle '#contact_email', characters: '█▓▒░█▓▒░█▓▒░<>/', speed: 161
    b.start()
    setTimeout =>
      $('#contact_email').attr 'href', "mailto:#{@contactEmail}"
      b.text( (text) => @contactEmail).reveal 1000
    , 1000