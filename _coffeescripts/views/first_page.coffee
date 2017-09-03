class App.Views.FirstPage extends App.Models.Base
  constructor: (opts = {}) ->
    super opts
    @windowHeight = window.innerHeight

  render: ->
    this._setHeights()
    this._handleLinks()
    this._renderMenu()
    this._renderLogo()
    $(window).on 'changed.zf.mediaquery', (event, newSize, oldSize) =>
      this._renderMenu()
      this._renderLogo()

  _setHeights: ->
    thin = @windowHeight * 0.1
    document.getElementById('menu_row').style.minHeight = "#{thin}px"
    for el in document.querySelectorAll('#menu_row > div.columns')
      el.style.minHeight = "#{thin}px"
    for el in document.querySelectorAll('#menu_row > div.columns > div.row')
      el.style.minHeight = "#{thin}px"
    document.getElementById('logo_row').style.minHeight = "#{@windowHeight * 0.8}px"
    document.getElementById('scroll_down_row').style.minHeight = "#{thin}px"

  _renderMenu: ->
    screen = Foundation.MediaQuery.current
    document.getElementById('goto_about').textContent = 'About'
    document.getElementById('goto_works').textContent = if screen is 'small' then 'Works' else 'Recent Works'
    document.getElementById('goto_os').textContent = if screen is 'small' then 'OS' else 'Open Source'
    document.getElementById('goto_contact').textContent = if screen is 'small' then 'Info' else 'Contact'

  _renderLogo: ->
    maxWidth = switch Foundation.MediaQuery.current
      when 'xxlarge' then '1170px'
      when 'xlarge' then '1170px'
      when 'large' then '994px'
      when 'medium' then '610px'
      when 'small' then '300px'
      else null
    if maxWidth?
      document.getElementById('logo').style.maxWidth = maxWidth

  _handleLinks: ->
    document.getElementById('goto_about').addEventListener 'click', (e) =>
      e.preventDefault()
      this._animate $('#second_page').offset().top + 75
    document.getElementById('goto_works').addEventListener 'click', (e) =>
      e.preventDefault()
      this._animate $('#third_page').offset().top - 25
    document.getElementById('goto_os').addEventListener 'click', (e) =>
      e.preventDefault()
      this._animate $('#fourth_page').offset().top - 25
    document.getElementById('goto_contact').addEventListener 'click', (e) =>
      e.preventDefault()
      this._animate $('#last_page').offset().top

  _animate: (top) ->
    $('html, body').animate {scrollTop: "#{top}px"}, 'normal'
