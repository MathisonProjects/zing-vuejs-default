<template>
	<div class='row'>
		<div class='col'>
			<h4>Finalize Purchase</h4>
			<div class='row'>
				<div class='col-sm-12 col-md-4'>
					<div>
					</div>

					<div class="card">
						<div class="card-header text-center">
							Your Personal Information
						</div>
						<div class="card-body">
							<p>{{ data.email }}</p>
							<p>{{ data.name }}</p>
							<p>{{ data.address_line1 }} {{ data.address_line2 }}</p>
							<p>{{ data.address_city }} {{ data.address_state }}, {{ data.address_zip }}</p>
							<p>{{ data.address_country }}</p>
						</div>
					</div>
				</div>
				<div class='col-sm-12 col-md-4'>
					<div class="card">
						<div class="card-header text-center">
							Your Payment Information
						</div>
						<div class="card-body">
							<p>Number: {{ maskedNumber }}</p>
							<p>Expiration: {{ data.exp_month }}/{{ data.exp_year }}</p>
							<p>CVC: {{ data.cvc }}</p>
						</div>
					</div>
				</div>
				<div class='col-sm-12 col-md-4'>
					<div class="card">
						<div class="card-header text-center">
							Product<span v-if='cart.length > 1'>s</span>
						</div>
						<div class="card-body">
							<p v-for='item in cart'>{{ item.item.sku }} - {{ item.item.title }}</p>
							<p>Amount: ${{ (data.amount/100).toFixed(2) }}</p>
							<button type='button' class='btn btn-primary btn-block' @click='purchase'>Purchase</button>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'confirmation-component',
		props: [
			'params',
			'data'
		],
		components: {},
		computed: {
    		maskedNumber() {
    			return "xxxx" + this.data.number.substr(this.data.number.length - 4);
    		},
			cart() {
				return this.$store.state.cartStore.cart;
			}
		},
		created() {},
		methods: {
			purchase() {
				this.$emit('updateConfirmation', [ true, {} ]);
			}
		},
		data() {
			return {}
		}

	};
</script>

<style scoped>

</style>