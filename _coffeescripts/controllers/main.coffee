class App.Controllers.Main extends App.Controllers.Base
  index: ->
    dims = Foundation.Box.GetDimensions $('body')

    pageView = new App.Views.Page
    pageView.render()

    firstPageView = new App.Views.FirstPage
    firstPageView.render()

    secondPageView = new App.Views.SecondPage
    secondPageView.render()