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

		<div class="card text-center">
			<div class="card-header">
				<h3>Your <span v-if='cart.length == 0' class='text-danger'>Empty</span> Cart</h3>
			</div>
			<div class="card-body">
				<p class="card-text">
					<div class='row' v-if='cart.length != 0'>
						<div class='col-sm-6 col-md-1'>
							<b>Image</b>
						</div>
						<div class='col-sm-6 col-md-2'>
							<b>Item</b>
						</div>
						<div class='col-sm-6 col-md-3'>
							<b>Description</b>
						</div>
						<div class='col-sm-6 col-md-2'>
							<b>Quantity</b>
						</div>
						<div class='col-sm-12 col-md-2'>
							<b>Price</b>
						</div>
						<div class='col-sm-12 col-md-2'>
							<b>Remove</b>
						</div>
					</div>
					<div v-for='item in cart'>
						<div class='row my-2'>
							<div class='col-sm-6 col-md-1'>
								<img :src='item.item.images.smallDisplay' class='w-100' />
							</div>
							<div class='col-sm-6 col-md-2'>
								{{ item.item.title }}
							</div>
							<div class='col-sm-6 col-md-3'>
								{{ item.item.shortdesc }}
							</div>
							<div class='col-sm-6 col-md-2'>
								<input type='text' v-model='item.quantity' class='form-control' />
							</div>
							<div class='col-sm-12 col-md-2'>
								${{ (item.item.price/100).toFixed(2) }}
							</div>
							<div class='col-sm-12 col-md-2'>
								<a href='javascript:void()' class='text-danger'><i class='fa fa-trash'></i></a>
							</div>
						</div>
					</div>
					<div class='row my-3' v-if='cart.length == 0'>
						<div class='col'>
							<p>You have nothing in your cart! Feel free to go shopping and come back.</p>
							<p>If you can't find anything you want, let me know and I'll add it to the shop!</p>
						</div>
					</div>
					<div class='row my-3' v-if='cart.length != 0'>
						<div class='col-8'>
							<b>Grand Total</b>
						</div>
						<div class='col'>
							${{ (grandTotal/100).toFixed(2) }}
						</div>
					</div>
				</p>
			</div>
		</div>
		<div v-for='item in cartItemized'></div>
	</div>
</template>

<script>
	export default {
		name: 'cart-component',
		props: [],
		components: {},
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
			},
			cartItemized() {
				var cartItemized = [];

				return cartItemized;
			},
			grandTotal() {
				return 0;
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