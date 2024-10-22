require('./bootstrap');

import Vue from 'vue';
import CKEditor       from '@ckeditor/ckeditor5-vue';
import VueRouter      from 'vue-router';
import BootstrapVue   from 'bootstrap-vue';
import Vuex           from 'vuex';
import Chat from 'vue-beautiful-chat'
import Notifications from 'vue-notification'
import 'es6-promise/auto';

import { Helper }         from '../helpers'

Vue.use(CKEditor);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(Chat);
Vue.use(Notifications);
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

        for (var i in store.state.jsonStore.resetStoreOnLoad[store.state.jsonStore.resetStoreOnLoad.mode]) {
            if (store.state.jsonStore.resetStoreOnLoad[store.state.jsonStore.resetStoreOnLoad.mode][i].state == true) {
                store.commit(i+'/DO_RESET', store.state.jsonStore.resetStoreOnLoad[store.state.jsonStore.resetStoreOnLoad.mode][i].payload);
            }
        }


        store.dispatch('jsonStore/reset');
        store.dispatch('forumStore/loadForum');
        store.dispatch('shopStore/loadStore');
        store.dispatch('galleryStore/loadGallery');
        store.dispatch('blogStore/getBlogs');

        this.$Helper.easterEggs.setup();
        this.$Helper.functionsStore.setTheme();
        


        var data = {
            user : store.getters['userStore/user']
        };

        if (CustomSite.Inits != null) {
            for (var i in CustomSite.Inits.stores) {
                store.dispatch(CustomSite.Inits.stores[i], data);
            }
        }
    },
    methods: { }
});


router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});