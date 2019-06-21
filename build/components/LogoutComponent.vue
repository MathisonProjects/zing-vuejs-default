<template>
	<div></div>
</template>

<script>
    export default {
		data() {
			return {}
		},
		methods: { },
        mounted() {
	    	sessionStorage['user_session'] = null;
	    	this.$root.init();
            console.log('Logout Component mounted.')
        }
    }
</script>
