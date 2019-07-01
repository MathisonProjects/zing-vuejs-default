<template>
	<b-navbar toggleable="lg" type="dark" variant="dark">
		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
		<b-navbar-brand href="#">Zing <i :class='branding'></i></b-navbar-brand>


		<b-collapse is-nav id="nav_collapse">
			<b-navbar-nav>
				<b-nav-item href="#" @click='handleNav("", false, {})'>Home</b-nav-item>
			</b-navbar-nav>

			<b-navbar-nav v-for="(nav, key, index) in navs" v-bind:nav='nav' v-bind:key='key' v-bind:index='index' v-if='nav.display' is-nav>
				
				<b-nav-item href="#" @click='handleNav(nav.page, nav.sub, nav.args)' v-if='nav.sub === false' >{{ nav.text }}</b-nav-item>

				<b-nav-item-dropdown v-if='nav.sub !== false' v-bind:text="nav.text">
					<b-dropdown-header href="#" v-if='nav.sub.component !== false'><component :is='nav.sub.component'></component></b-dropdown-header>
				</b-nav-item-dropdown>

			</b-navbar-nav>



			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto">
				<b-nav-item href="#" @click='handleNav("cart", false, {})' v-if='shopEnabled' is-nav><i class='fa fa-shopping-cart'></i> ({{ cartItems }}) ${{ cartTotal }}</b-nav-item>
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
    		},
    		shopEnabled() {
    			return this.$store.state.shopStore.shopEnabled;
    		},
    		cartTotal() {
    			if (this.shopEnabled) {
    				return (this.$store.getters['cartStore/grandTotal']/100).toFixed(2);
    			}
    			return 0;
    		},

    		cartItems() {
    			if (this.shopEnabled) {
    				return this.$store.state.cartStore.cart.length;
    			}
    			return 0;
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