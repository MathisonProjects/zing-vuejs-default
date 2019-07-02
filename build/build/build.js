require('./bootstrap');

import CKEditor       from '@ckeditor/ckeditor5-vue';
import VueRouter      from 'vue-router';
import BootstrapVue   from 'bootstrap-vue';
import Vuex           from 'vuex';
import 'es6-promise/auto';
import easter         from '../helpers/easterEggs';
import reorderList    from '../helpers/ReorderList';
import socket         from '../helpers/socket';
import looseFunctions from '../helpers/LooseFunctions';
import apiProfiles    from '../helpers/api.profiles';
import stripe         from '../helpers/api.stripe';
import apiOpen        from '../helpers/api.open';
import local          from '../helpers/api.local';
import funcs          from '../helpers/functions.store';
import dbtable        from '../helpers/functions.datatable';
import svgAlter       from '../helpers/functions.image';

const Vue = require('vue');
Vue.use(CKEditor);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(easter        , '$easter');
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
import router from './router';

// Port back to application.js somehow. Temporary fix.
new Vue({
    el: '#app',
    data: {},
    store,
    router,
    computed: {},
    created() {
        console.log('Application is Running...');
        store.dispatch('jsonStore/reset');
        store.dispatch('forumStore/loadForum');
        store.dispatch('shopStore/loadStore');
        store.dispatch('galleryStore/loadGallery');

        this.$easter.setup();
    },
    methods: { }
});