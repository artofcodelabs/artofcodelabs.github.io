class App.Views.ThirdPage extends App.Models.Base
  constructor: (opts = {}) ->
    super opts
    @windowHeight = $(window).height()

  render: ->
    $('#third_page > .row:first').css 'min-height', @windowHeight
    this._renderSecretProject()

  _renderSecretProject: ->
    b = baffle '#secret_project_name', characters: '▒░▓▒░▓▒░<>/', speed: 161
    b.start()