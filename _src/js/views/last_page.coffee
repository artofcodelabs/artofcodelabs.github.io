class App.Views.LastPage extends App.Models.Base
  constructor: (opts = {}) ->
    super opts
    at = '@'
    @contactEmail = 'hello' + at + 'artofcode' + '.' + 'co'

  render: ->
    this._renderContactEmail()

  _renderContactEmail: ->
    b = baffle '#contact_email', characters: '█▓▒░█▓▒░█▓▒░<>/', speed: 161
    b.start()
    setTimeout =>
      document.getElementById('contact_email').setAttribute('href', "mailto:#{@contactEmail}")
      b.text( (text) => @contactEmail).reveal 1000
    , 1000