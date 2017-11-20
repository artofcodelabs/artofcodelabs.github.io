import 'script-loader!jquery';
import 'script-loader!foundation-sites/dist/plugins/foundation.core.js';
import 'script-loader!foundation-sites/dist/plugins/foundation.util.mediaQuery.js';
import 'script-loader!foundation-sites/dist/plugins/foundation.util.box.js';
import 'script-loader!foundation-sites/dist/plugins/foundation.util.triggers.js';
import 'script-loader!foundation-sites/dist/plugins/foundation.interchange.js';
import 'script-loader!loco-js/dist/loco.js'

import './js/initializers/foundation.coffee';
import './js/initializers/loco.coffee';

import './js/views/first_page.coffee';
import './js/views/last_page.coffee';
import './js/views/footer.coffee';
import './js/controllers/main.coffee';

import './css/application.scss';