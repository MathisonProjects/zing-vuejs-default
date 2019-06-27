import Vue from 'vue';
import { store } from '../stores';
import router from './router.js';

export default new Vue({
    el: '#app',
    data: {},
    store,
    router,
    computed: {},
    created() {
        console.log('Application is Running...');
        store.dispatch('forumStore/loadForum');
        store.dispatch('shopStore/loadStore');
    },
    methods: { }
});