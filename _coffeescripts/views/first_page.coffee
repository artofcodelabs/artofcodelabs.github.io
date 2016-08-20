class App.Views.FirstPage extends App.Models.Base
  constructor: (opts = {}) ->
    super opts
    @windowHeight = $(window).height()

  render: ->
    this._setHeights()
    this._renderMenu Foundation.MediaQuery.current
    this._handleLinks()
    $(window).on 'changed.zf.mediaquery', (event, newSize, oldSize) =>
      this._renderMenu Foundation.MediaQuery.current

  _setHeights: ->
    thin = @windowHeight * 0.1
    $('#menu_row').css 'min-height', thin
    $('#menu_row > div.columns').css 'min-height', thin
    $('#menu_row > div.columns > div.row').css 'min-height', thin
    $('#logo_row').css 'min-height', @windowHeight * 0.8
    $('#scroll_down_row').css 'min-height', thin

  _renderMenu: (screen) ->
    $('#goto_about').text 'About'
    $('#goto_works').text if screen is 'small' then 'Works' else 'Recent Works'
    $('#goto_os').text if screen is 'small' then 'OS' else 'Open Source'
    $('#goto_contact').text if screen is 'small' then 'Info' else 'Contact'

  _handleLinks: ->
    $('#goto_about').click (e) =>
      e.preventDefault()
      this._animate $('#second_page').offset().top + 75
    $('#goto_works').click (e) =>
      e.preventDefault()
      this._animate $('#third_page').offset().top - 25
    $('#goto_os').click (e) =>
      e.preventDefault()
      this._animate $('#fourth_page').offset().top - 25
    $('#goto_contact').click (e) =>
      e.preventDefault()
      this._animate $('#last_page').offset().top

  _animate: (top) ->
    $('html, body').animate {scrollTop: "#{top}px"}, 'normal'