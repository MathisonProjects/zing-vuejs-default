require('./bootstrap');

import CKEditor       from '@ckeditor/ckeditor5-vue';
import VueRouter      from 'vue-router';
import BootstrapVue   from 'bootstrap-vue';
import Vuex           from 'vuex';
import 'es6-promise/auto';
import reorderList    from '../helpers/ReorderList.js';
import socket         from '../helpers/socket.js';
import looseFunctions from '../helpers/LooseFunctions.js';
import apiProfiles    from '../helpers/api.profiles.js';
import stripe         from '../helpers/api.stripe.js';
import apiOpen        from '../helpers/api.open.js';
import local          from '../helpers/api.local.js';
import funcs          from '../helpers/functions.store.js';
import dbtable        from '../helpers/functions.datatable.js';
import svgAlter       from '../helpers/functions.image.js';

window.Vue = require('vue');
window.Vue.use(CKEditor);
window.Vue.use(VueRouter);
window.Vue.use(Vuex);
window.Vue.use(BootstrapVue);
window.Vue.use(reorderList   , '$reorder');
window.Vue.use(socket        , '$socket');
window.Vue.use(looseFunctions, '$loose');
window.Vue.use(apiProfiles   , '$zprofiles');
window.Vue.use(stripe        , '$stripe');
window.Vue.use(apiOpen       , '$apiOpen');
window.Vue.use(local         , '$local');
window.Vue.use(funcs         , '$funcs');
window.Vue.use(dbtable       , '$dbtable');
window.Vue.use(svgAlter      , '$svgAlter');


const store  = require('./store.js')(Vuex);
const router = require('./router.js')(VueRouter);
const app    = require('./application.js')(store, router);