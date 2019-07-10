require('./bootstrap');

import CKEditor       from '@ckeditor/ckeditor5-vue';
import VueRouter      from 'vue-router';
import BootstrapVue   from 'bootstrap-vue';
import Vuex           from 'vuex';
import 'es6-promise/auto';
import { Helper }         from '../helpers'

const Vue = require('vue');
Vue.use(CKEditor);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(Helper, '$Helper');

import { store } from '@store';
import router from '@route';
import CustomSite from '@custom';

// Port back to application.js somehow. Temporary fix.
new Vue({
    el   : '#app',
    data : {},
    store,
    router,
    computed: {},
    created() {
        console.log('Application is Running...');
        store.dispatch('jsonStore/reset');
        store.dispatch('forumStore/loadForum');
        store.dispatch('shopStore/loadStore');
        store.dispatch('galleryStore/loadGallery');

        this.$Helper.easterEggs.setup();

        var data = {
            user : store.getters['userStore/user']
        };

        for (var i in CustomSite.Inits.stores) {
            store.dispatch(CustomSite.Inits.stores[i], data);
        }
    },
    methods: { }
});