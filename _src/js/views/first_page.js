import {Views} from 'loco-js';

class FirstPage extends Views.Base{
  constructor(opts = {}){
    super(opts);
    this.windowHeight = window.innerHeight;
  }

  render(){
    this._setHeights();
    this._handleLinks();
    this._renderMenu();
    $(window).on('changed.zf.mediaquery', (event, newSize, oldSize) => {
      this._renderMenu();
    });
  }

  _setHeights(){
    const thin = this.windowHeight * 0.1;
    document.getElementById('menu_row').style.minHeight = `${thin}px`;
    document.querySelectorAll('#menu_row > div.columns').forEach(el => {
      el.style.minHeight = `${thin}px`;
    });
    document.querySelectorAll('#menu_row > div.columns > div.row').forEach(el => {
      el.style.minHeight = `${thin}px`;
    });
    document.getElementById('logo_row').style.minHeight = `${this.windowHeight * 0.8}px`;
    document.getElementById('scroll_down_row').style.minHeight = `${thin}px`;
  }

  _renderMenu(){
    screen = Foundation.MediaQuery.current;
    document.getElementById('goto_about').textContent = 'About';
    document.getElementById('goto_works').textContent = screen === 'small' ? 'Works' : 'Recent Works';
    document.getElementById('goto_os').textContent = screen === 'small' ? 'OS' : 'Open Source';
    document.getElementById('goto_contact').textContent = screen === 'small' ? 'Info' : 'Contact';
  }

  _handleLinks(){
    document.getElementById('goto_about').addEventListener('click', (e) => {
      e.preventDefault();
      this._animate($('#second_page').offset().top + 75);
    });
    document.getElementById('goto_works').addEventListener('click', (e) => {
      e.preventDefault();
      this._animate($('#third_page').offset().top - 25);
    });
    document.getElementById('goto_os').addEventListener('click', (e) => {
      e.preventDefault();
      this._animate($('#fourth_page').offset().top - 25);
    });
    document.getElementById('goto_contact').addEventListener('click', (e) => {
      e.preventDefault();
      this._animate($('#last_page').offset().top);
    });
  }

  _animate(top){
    $('html, body').animate({scrollTop: `${top}px`}, 'normal');
  }
}

export default FirstPage;