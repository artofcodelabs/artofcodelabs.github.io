import baffle from 'baffle';
import {Views} from 'loco-js';

class LastPage extends Views.Base{
  constructor(opts = {}){
    super(opts);
    const at = '@';
    this.contactEmail = 'hello' + at + 'artofcode' + '.' + 'co';
  }

  render(){
    this._renderContactEmail();
  }

  _renderContactEmail(){
    const b = baffle('#contact_email', {characters: '█▓▒░█▓▒░█▓▒░<>/', speed: 161});
    b.start();
    setTimeout(() => {
      document.getElementById('contact_email').setAttribute('href', `mailto:${this.contactEmail}`);
      b.text( (text) => this.contactEmail).reveal(1000);
    }, 1000);
  }
}

export default LastPage;