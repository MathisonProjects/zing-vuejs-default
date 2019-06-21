<template>
	<BaseNavComponent v-bind:navs='navs'></BaseNavComponent>
</template>

<script>
	import BaseNavComponent from './BaseNavComponent';

    export default {
    	name: 'nav-out-component',
    	props: [
    		'navs'
    	],
    	components: {
    		BaseNavComponent
    	},
		data() {
			return {
				navs: [
					{
						page: 'register',
						text: 'Register',
						sub : {
							component: 'RegisterComponent'
						},
						args: {}
					},
					{
						page: 'login',
						text: 'Login',
						sub : {
							component: 'LoginComponent'
						},
						args: {}
					},
					{
						page: 'stylesheet',
						text: 'Stylesheet',
						sub : false,
						args: {}
					}
				]
			}
		},
		methods: {

		},
        mounted() {
            console.log('Nav Out Component mounted.')
        }
    }
</script>
