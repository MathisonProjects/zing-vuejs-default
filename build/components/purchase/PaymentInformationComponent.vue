<template>
	<div class='row my-3'>
		<div class='col-12 mb-3'>
			<CartComponent />
		</div>
		<div class='col-12'>
			<div class="card text-center">
				<div class="card-header">
					<h3>Your Payment Information</h3>
				</div>
				<div class="card-body">
					<div class='row'>
						<div class='col-md-6 col-sm-12'>
							<div class='form-group'>
								<label>Name <span class='text-danger'>*</span></label>
								<input type='text' class='form-control' v-model='data.name' />
							</div>
							<div class='form-group'>
								<label>Email <span class='text-danger'>*</span></label>
								<input type='text' class='form-control' v-model='data.email' />
							</div>
							<div class='form-group' v-if='true == false'>
								<label>Password <span class='text-danger'>*</span></label>
								<input type='password' class='form-control' v-model='data.password' />
							</div>
							<div class='form-group' v-if='true == false'>
								<label>Repeat Password <span class='text-danger'>*</span></label>
								<input type='password' class='form-control' v-model='data.password_repeat' />
							</div>
							<div class='form-group'>
								<label>Address <span class='text-danger'>*</span></label>
								<input type='text' class='form-control' v-model='data.address_line1' />
							</div>
							<div class='form-group'>
								<label>Address 2</label>
								<input type='text' class='form-control' v-model='data.address_line2' />
							</div>
							<div class='row'>
								<div class='col'>
									<div class='form-group'>
										<label>City <span class='text-danger'>*</span></label>
										<input type='text' class='form-control' v-model='data.address_city' />
									</div>
								</div>
								<div class='col'>
									<div class='form-group'>
										<label>State/Province <span class='text-danger'>*</span></label>
										<input type='text' class='form-control' v-model='data.address_state' />
									</div>
								</div>
								<div class='col'>
									<div class='form-group'>
										<label>Zip/Postal Code <span class='text-danger'>*</span></label>
										<input type='text' class='form-control' v-model='data.address_zip' />
									</div>
								</div>
							</div>
							<div class='form-group'>
								<label>Country <span class='text-danger'>*</span></label>
								<select v-model='data.address_country' class='form-control'>
									<option :value='country.code' v-for='country in Countries'>{{ country.name }}</option>
								</select>
							</div>
						</div>
						<div class='col-md-6 col-sm-12'>
							<div class='form-group'>
								<label>Debit/Credit Card Number <span class='text-danger'>*</span></label>
								<input type='text' class='form-control' v-model='data.number' placeholder='4111111111111111' maxlength="16" />
							</div>
							<div class='row'>
								<div class='col'>
									<div class='form-group'>
										<label>Expiration <span class='text-danger'>*</span></label>
										<div class="input-group">
											<div class="input-group-prepend w-50">
												<input type='text' class='form-control' v-model='data.exp_month' placeholder='MM' maxlength="2" />
											</div>
											<input type='text' class='form-control' v-model='data.exp_year' placeholder='YYYY' maxlength="4" />
										</div>
									</div>
								</div>
								<div class='col'>
									<div class='form-group'>
										<label>cvc <span class='text-danger'>*</span></label>
										<input type='text' class='form-control' v-model='data.cvc' placeholder='Back 3-4 digits of Credit Card' />
									</div>
								</div>
							</div>
							<div class='row'>
								<div class='col'>
									<div class='form-group'>
										<label>Promo Code</label>
										<input type='text' class='form-control' v-model='promotional' placeholder='Eg: SuiteZing' />
									</div>
								</div>
							</div>
							<div class='row'>
								<div class='col'>
									<label>Amount</label>
									<div class="input-group mb-3">
										<input type='text' class='form-control' :value='amount' disabled />
										<div class="input-group-append">
											<button type='button' class='btn btn-primary' @click='proceed' :disabled='notReadyPurchase'>Proceed</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import CartComponent from '../cart/CartComponent'
	export default {
		name: 'payment-information-component',
		props: [
			'params'
		],
		components: {
			CartComponent
		},
		computed: {
			Countries() {
    			return this.$store.state.jsonStore.countryStateProvince;
    		},
    		amount() {
    			var amount = this.$store.getters['cartStore/grandTotal'];
    			this.data.amount = amount;
				return "$" + (amount/100).toFixed(2);
    		},
			notReadyPurchase() {
    			var notReady = false;

    			if (
					this.data.number == null ||
					this.data.exp_month == null ||
					this.data.exp_year == null ||
					this.data.amount == null ||
					this.data.cvc == null
    			) {
    				notReady = true;
    			}

    			if (this.currentUser == '') {
	    			if (
						this.data.name == null ||
						this.data.email == null ||
						this.data.address_line1 == null ||
						this.data.address_city == null ||
						this.data.address_state == null ||
						this.data.address_country == null ||
						this.data.address_zip == null
						// this.data.password == null ||
						// this.data.password_repeat == null
					) {
						// Implement User Purchase Later
		    			// if (this.data.password != this.data.password_repeat && this.data.password.length < 6) {
		    			// 	notReady = true;
		    			// }
	    				// notReady = true;
	    			}
    			}
    			return notReady;
			}
		},
		created() {},
		methods: {
			proceed() {
				this.$emit('updatePayment', this.data);
			}
		},
		data() {
			return {
				defaultData : {
					product         : null,
					name            : null,
					email           : null,
					number          : null,
					exp_month       : null,
					exp_year        : null,
					cvc             : null,
					address_line1   : null,
					address_line2   : '',
					address_city    : null,
					address_state   : null,
					address_country : null,
					address_zip     : null,
					amount          : null,
					pricing         : null,
					password        : null,
					password_repeat : null,
					type            : 'purchase'
				},
				data : this.params,
				promotional : null
			}
		}
	};
</script>

<style scoped>

</style>