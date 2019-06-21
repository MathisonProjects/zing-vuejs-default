<template>
	<div>
		<div class="card text-center">
			<div class="card-header">
				<h3>Your Cart</h3>
			</div>
			<div class="card-body">
				<h5 class="card-title">What do we have to offer?</h5>
				<p class="card-text">
					<div>
						<div class='row'>
							<div class='col'>
								<b>Image</b>
							</div>
							<div class='col'>
								<b>Item</b>
							</div>
							<div class='col'>
								<b>Description</b>
							</div>
							<div class='col'>
								<b>Quantity</b>
							</div>
							<div class='col'>
								<b>Price</b>
							</div>
						</div>
					</div>
					<div v-for='item in cart'>
						<div class='row'>
							<div class='col'>
								{{ item.image }}
							</div>
							<div class='col'>
								{{ item.name }}
							</div>
							<div class='col'>
								{{ item.description }}
							</div>
							<div class='col'>
								<input type='text' v-model='item.quantity' class='form-control' />
							</div>
							<div class='col'>
								${{ item.price/100 }}
							</div>
						</div>
					</div>
					<div>
						<div class='row'>
							<div class='col-10'>
								Grand Total
							</div>
							<div class='col'>
								${{ grandTotal/100 }}
							</div>
						</div>
					</div>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'cart-component',
		props: [],
		components: {},
		computed: {
			cartPrepared() {
				return this.$store.state.CartStore.isLoaded;
			},
			cart() {
				if (this.cartPrepared == true) {
					return this.$store.state.CartStore.cart;
				} else {
					return []
				}
			},
			grandTotal() {
				return 0;
			}
		},
		created() {},
		methods: {},
		data() {
			return {}
		}

	};
</script>

<style scoped>

</style>