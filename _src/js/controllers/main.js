import {Controllers} from 'loco-js';
import FirstPage from '../views/first_page';
import LastPage from '../views/last_page';
import Footer from '../views/footer';

class Main extends Controllers.Base{
  index(){
    (new FirstPage).render();
    (new LastPage).render();
    (new Footer).render();
  }
}

export default Main;