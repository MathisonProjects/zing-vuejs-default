module.exports = function(store, router){
    return new Vue({
        el: '#app',
        data: {},
        store,
        router,
        computed: {
        },
        created() {
            console.log('Application is Running...');
            store.dispatch('ForumStore/loadForum');
            console.log(router.currentRoute);
        },
        methods: { }
    });
}