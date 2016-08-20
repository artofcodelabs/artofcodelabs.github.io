class App.Controllers.Main extends App.Controllers.Base
  index: ->
    (new App.Views.FirstPage).render()
    (new App.Views.ThirdPage).render()
    (new App.Views.LastPage).render()
    (new App.Views.Footer).render()