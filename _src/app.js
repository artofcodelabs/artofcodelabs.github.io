import "core-js/fn/object/assign";

import 'script-loader!jquery';
import 'script-loader!foundation-sites/dist/plugins/foundation.core.js';
import 'script-loader!foundation-sites/dist/plugins/foundation.util.mediaQuery.js';

import { init, Controllers } from 'loco-js-core';
import Main from './js/controllers/main';

import './css/application.scss';

Object.assign(Controllers, {
  Main
});

$(document).foundation();
$(function(){
  init(Controllers);
});
