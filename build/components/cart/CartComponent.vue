<template>
	<div class="card text-center">
		<div class="card-header">
			<h3>Your <span v-if='cart.length == 0' class='text-danger'>Empty</span> Cart</h3>
		</div>
		<div class="card-body">
			<p class="card-text">
				<div class='row' v-if='cart.length != 0'>
					<div class='col-sm-6 col-md-2'>
						<b>Image</b>
					</div>
					<div class='col-sm-6 col-md-2'>
						<b>Item</b>
					</div>
					<div class='col-sm-6 col-md-3'>
						<b>Description</b>
					</div>
					<div class='col-sm-12 col-md-2'>
						<b>Price</b>
					</div>
					<div class='col-sm-12 col-md-3'>
						<b>Remove</b>
					</div>
				</div>
				<div v-for='item, index in cart'>
					<div class='row my-2'>
						<div class='col-sm-6 col-md-2'>
							<img :src='item.item.images.smallDisplay' class='w-100' />
						</div>
						<div class='col-sm-6 col-md-2'>
							{{ item.item.title }}
						</div>
						<div class='col-sm-6 col-md-3'>
							{{ item.item.shortdesc }}
						</div>
						<div class='col-sm-12 col-md-2'>
							${{ (item.item.price/100).toFixed(2) }}
						</div>
						<div class='col-sm-12 col-md-3'>
							<a href='javascript:void(0)' class='text-danger' @click='removeItem(index)'><i class='fa fa-trash'></i></a>
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
					<div class='col-md-7'>
						<b>Grand Total</b>
					</div>
					<div class='col-md-2'>
						${{ (grandTotal/100).toFixed(2) }}
					</div>
				</div>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cart-component',
		props: [],
		components: { },
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
			grandTotal() {
				return this.$store.getters['cartStore/grandTotal'];
			}
		},
		created() {
		},
		methods: {
			removeItem(index) {
				this.$store.dispatch('cartStore/removeFromCart', index);
			}
		},
		data() {
			return {}
		}
	};
</script>

<style scoped></style>