<template>
	<div>
		<div class='row my-3'>
			<div class='col-md-4 col-sm-12'>
				<button type='button' class='btn btn-primary' @click='backToShopping'><i class='fa fa-shopping-basket'></i> Back to Shopping</button>
			</div>
			<div class='col-md-4 col-sm-12 text-center'>
				<button type='button' class='btn btn-danger' @click='clearCart' :disabled="cart.length == 0"><i class='fa fa-trash'></i> Clear Cart</button>
			</div>
			<div class='col-md-4 col-sm-12 text-right'>
				<button type='button' class='btn btn-primary' @click='checkout' :disabled="cart.length == 0"><i class='fa fa-shopping-cart'></i> Checkout</button>
			</div>
		</div>

		<CartComponent />
	</div>
</template>

<script>
	import CartComponent from '@/components/cart/CartComponent'
	export default {
		name: 'cart-component',
		props: [],
		components: {
			CartComponent
		},
		computed: {
			cartPrepared() {
				return this.$store.getters['cartStore/isLoaded'];
			},
			cart() {
				if (this.cartPrepared == true) {
					return this.$store.state.cartStore.cart;
				} else {
					return []
				}
			}
		},
		created() {
		},
		methods: {
			backToShopping() {
				this.$router.push('/shop');
			},
			clearCart() {
				this.$store.dispatch('cartStore/resetCart');;
			},
			checkout() {
				this.$router.push('/purchase');
			}
		},
		data() {
			return {}
		}

	};
</script>

<style scoped>

</style>