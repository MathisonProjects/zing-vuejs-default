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
            router.push('/');
        },
        methods: { }
    });
}