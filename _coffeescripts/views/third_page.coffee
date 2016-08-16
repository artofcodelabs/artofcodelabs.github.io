class App.Views.ThirdPage extends App.Models.Base
  constructor: (opts = {}) ->
    super opts
    @windowHeight = $(window).height()

  render: ->
    $('#third_page > .row:first').css 'min-height', @windowHeight
    this._renderSecretProject()
    this._handleScrollingToAvatars()

  _renderSecretProject: ->
    b = baffle '#secret_project_name', characters: '▒░▓▒░▓▒░<>/', speed: 161
    b.start()

  _handleScrollingToAvatars: ->
    $('a.go_to_avatars').click (e) ->
      e.preventDefault()
      top = if Foundation.MediaQuery.atLeast('medium')
        $('#open_source_header').offset().top - 16 - 18
      else
        $('#avatars_columns').offset().top - 16
      $('html, body').animate {scrollTop: "#{top}px"}, 'normal'