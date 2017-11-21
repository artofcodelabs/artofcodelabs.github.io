import {Controllers} from 'loco-js'
import FirstPage from '../views/first_page.coffee'
import LastPage from '../views/last_page.coffee'
import Footer from '../views/footer.coffee'

class Main extends Controllers.Base
  index: ->
    (new FirstPage).render()
    (new LastPage).render()
    (new Footer).render()

export default Main