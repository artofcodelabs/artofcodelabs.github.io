import {Views} from 'loco-js';

class Footer extends Views.Base{
  constructor(opts = {}){
    super(opts);
  }

  render(){
    const year = new Date().getFullYear();
    document.getElementById('current_year').textContent = year;
  }
}

export default Footer;