<template>
	<BaseNavComponent v-bind:navs='navs'></BaseNavComponent>
</template>

<script>
	import BaseNavComponent from './BaseNavComponent';
    export default {
    	name: 'nav-out-component',
    	components: {
    		BaseNavComponent
    	},
		data() {
			return {
				navs: [
					{
						page: 'stylesheet',
						text: 'Stylesheet',
						sub : false,
						args: {}
					},
					{
						page: 'page-settings',
						text: 'Settings',
						sub : false,
						args: {}
					},
					{
						page: 'logout',
						text: 'Logout',
						sub : false,
						args: {}
					}
				]
			}
		},
		methods: {

		},
        mounted() {
            console.log('Nav In Component mounted.')
        }
    }
</script>
