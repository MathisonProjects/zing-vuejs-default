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

const Vue = require('vue');
Vue.use(CKEditor);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(reorderList   , '$reorder');
Vue.use(socket        , '$socket');
Vue.use(looseFunctions, '$loose');
Vue.use(apiProfiles   , '$zprofiles');
Vue.use(stripe        , '$stripe');
Vue.use(apiOpen       , '$apiOpen');
Vue.use(local         , '$local');
Vue.use(funcs         , '$funcs');
Vue.use(dbtable       , '$dbtable');
Vue.use(svgAlter      , '$svgAlter');

import { store } from '../stores';
import router from './router.js';

// Port back to application.js somehow. Temporary fix.
new Vue({
    el: '#app',
    data: {},
    store,
    router,
    computed: {},
    created() {
        console.log('Application is Running...');
        store.dispatch('forumStore/loadForum');
        store.dispatch('shopStore/loadStore');
        store.dispatch('galleryStore/loadGallery');
    },
    methods: { }
});