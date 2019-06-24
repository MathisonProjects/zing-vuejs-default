<template>
	<b-navbar toggleable="md" type="dark" variant="dark">
		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		<b-navbar-brand href="#">Zing <i :class='branding'></i></b-navbar-brand>
		<b-collapse is-nav id="nav_collapse">
			<b-navbar-nav>
				<b-nav-item href="#" v-on:click='handleNav("", false, {})'>Home</b-nav-item>
			</b-navbar-nav>
			<b-navbar-nav v-for="(nav, key, index) in navs" v-bind:nav='nav' v-bind:key='key' v-bind:index='index' v-if='nav.display'>
				<b-nav-item href="#" v-on:click='handleNav(nav.page, nav.sub, nav.args)' v-if='nav.sub === false' >{{ nav.text }}</b-nav-item>
				<b-nav-item-dropdown v-if='nav.sub !== false' v-bind:text="nav.text">
					<b-dropdown-header href="#" v-if='nav.sub.component !== false'><component :is='nav.sub.component'></component></b-dropdown-header>
				</b-nav-item-dropdown>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
	import LoginComponent from './LoginComponent';
	import RegisterComponent from './RegisterComponent';
    export default {
    	props: [
    		"navs"
    	],
    	components: {
    		LoginComponent,
    		RegisterComponent
    	},
    	computed: {
    		branding() {
    			return 'fa fa-address-card';
    		}
    	},
		data() {
			return { }
		},
		methods: {
			handleNav(page, sub, args) {
				if (sub == false) {
					this.$router.push('/'+page);
				}
			}
		},
        mounted() {
            console.log('Base Nav Component mounted.')
        }
    }
</script>