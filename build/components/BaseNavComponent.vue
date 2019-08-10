<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="dark">
			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
			<b-navbar-brand href="javascript:void(0)">Zing <i :class='branding'></i></b-navbar-brand>

			<b-collapse is-nav id="nav_collapse">
				<b-navbar-nav>
					<b-nav-item to='/'>Home</b-nav-item>
				</b-navbar-nav>
				<b-navbar-nav v-for="(nav, key, index) in navs" v-bind:nav='nav' v-bind:key='key' v-bind:index='index' v-if='nav.display' is-nav>
					<b-nav-item href="javascript:void(0)" @click='handleNav(nav.page, nav.sub, nav.args)' v-if='nav.sub === false && (nav.children === false)' >{{ nav.text }}</b-nav-item>
					<b-nav-item-dropdown v-if='nav.sub !== false' v-bind:text="nav.text">
						<b-dropdown-header href="javascript:void(0)" v-if='nav.sub.component !== false'><component :is='nav.sub.component'></component></b-dropdown-header>
					</b-nav-item-dropdown>

					<b-nav-item-dropdown v-if='nav.children !== false' v-bind:text="nav.text">
						<b-dropdown-item v-for='child in nav.children' :key='child.page' :to='child.page'> {{child.text}} </b-dropdown-item>
					</b-nav-item-dropdown>

				</b-navbar-nav>

				<!-- Right aligned nav items -->
				<b-navbar-nav class="ml-auto">
					<b-nav-item-dropdown text="More" class='mt-1' right>
						<b-dropdown-item @click='setTheme("dark")' v-if='currentMode == "light"' style='max-width: 100%; width: 300px'>
							<i class='fa fa-moon-o'></i> Change Mode
						</b-dropdown-item>
						<b-dropdown-item @click='setTheme("light")' v-if='currentMode == "dark"'>
							<i class='fa fa-sun-o'></i> Change Mode
						</b-dropdown-item>
						<b-dropdown-item @click='handleNav("cart", false, false)' v-if='shopEnabled'>
							<i class='fa fa-shopping-cart'></i> ({{ cartItems }}) ${{ cartTotal }}
						</b-dropdown-item>
						<b-dropdown-divider></b-dropdown-divider>
						<b-dropdown-text>
							<div class='container row'>
								<div class='col-9'>
									<input type='text' class='form-control form-control-sm' placeholder='Query...' />
								</div>
								<div class='col-3'>
									<button type='button' class='btn btn-primary btn-sm' @click='search'>Search</button>
								</div>
							</div>
							
						</b-dropdown-text>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
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
    		},
    		currentMode() {
    			return this.$store.state.settingsStore.siteMode;
    		}
    	},
		data() {
			return { }
		},
		methods: {
			handleNav(page, sub, args) {
				if (sub == false && args == false) {
					this.$router.push('/'+page);
				} else if ( args != false) {
					this.$store.dispatch(args.dispatch);
				}
			},
			search() {
				console.log('Search logic needed...');
			},
    		setTheme(theme) {
    			this.$store.dispatch('settingsStore/setMode', theme);
    			this.$Helper.functionsStore.setTheme();
    		}
		},
        mounted() {
            console.log('Base Nav Component mounted.')
        }
    }
</script>