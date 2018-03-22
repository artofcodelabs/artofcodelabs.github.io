import "core-js/fn/object/assign";

import 'script-loader!jquery';
import 'script-loader!foundation-sites/dist/plugins/foundation.core.js';
import 'script-loader!foundation-sites/dist/plugins/foundation.util.mediaQuery.js';

import {Controllers, Loco} from 'loco-js';
import Main from './js/controllers/main';

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

$(document).foundation();
loco.init();