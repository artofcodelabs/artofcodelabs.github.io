import FirstPage from '../views/first_page';
import LastPage from '../views/last_page';
import Footer from '../views/footer';

class Main {
  index(){
    (new FirstPage).render();
    (new LastPage).render();
    (new Footer).render();
  }
}

export default Main;