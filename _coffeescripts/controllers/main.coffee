class App.Controllers.Main extends App.Controllers.Base
  index: ->
    dims = Foundation.Box.GetDimensions $('body')

    $(window).on 'changed.zf.mediaquery', (event, newSize, oldSize) ->
      console.log Foundation.MediaQuery.current

    pageView = new App.Views.Page
    pageView.render()

    firstPageView = new App.Views.FirstPage
    firstPageView.render()

    secondPageView = new App.Views.SecondPage
    secondPageView.render()

    thirdPageView = new App.Views.ThirdPage
    thirdPageView.render()

    fourthPageView = new App.Views.FourthPage
    fourthPageView.render()

    lastPageView = new App.Views.LastPage
    lastPageView.render()

    footerView = new App.Views.Footer
    footerView.render()