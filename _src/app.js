import 'script-loader!jquery';
import 'script-loader!foundation-sites/dist/plugins/foundation.core.js';
import 'script-loader!foundation-sites/dist/plugins/foundation.util.mediaQuery.js';
import 'script-loader!foundation-sites/dist/plugins/foundation.util.box.js';
import 'script-loader!foundation-sites/dist/plugins/foundation.util.triggers.js';
import 'script-loader!foundation-sites/dist/plugins/foundation.interchange.js';

import './js/initializers/foundation.coffee';

import {Controllers, Loco} from 'loco-js';
import Main from './js/controllers/main.coffee';

import './css/application.scss';

Object.assign(Controllers, {
  Main
});

const loco = new Loco({
  turbolinks: false,
  notifications: {
    enable: false
  }
});

loco.init();