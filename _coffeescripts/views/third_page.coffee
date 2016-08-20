class App.Views.ThirdPage extends App.Models.Base
  constructor: (opts = {}) ->
    super opts

  render: ->
    this._renderSecretProject()
    this._handleLinks()

  _renderSecretProject: ->
    b = baffle '#secret_project_name', characters: '▒░▓▒░▓▒░<>/', speed: 161
    b.start()

  _handleLinks: ->
    $('a.goto_avatars').click (e) ->
      e.preventDefault()
      top = if Foundation.MediaQuery.atLeast('medium')
        $('#open_source_header').offset().top - 16 - 18
      else
        $('#avatars_columns').offset().top - 16
      $('html, body').animate {scrollTop: "#{top}px"}, 'normal'