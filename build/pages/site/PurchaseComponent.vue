<template>
	<div>
		<h3>Proceeding to Purchase</h3>
		<div class='row my-3'>
			<div class='col-md-6'>
				<button type='button' class='btn btn-primary' @click='stepChange(-1)' :disabled='PaymentStage == 0'>Previous</button>
			</div>
			<div class='col-md-6 text-right'>
				<button type='button' class='btn btn-primary' @click='stepChange(1)' :disabled='PaymentStage == 3'>Next</button>
			</div>
		</div>
		<GuestUserComponent v-if='PaymentStage == 0' :params.sync='User' @updateUser='updateUser' />
		<PaymentInformationComponent v-if='PaymentStage == 1' :params.sync='Payment' />
		<ConfirmationComponent v-if='PaymentStage == 2' :params.sync='Confirmation' />
		<PaymentStatusComponent v-if='PaymentStage == 3' :params.sync='PaymentStatus' />
	</div>
</template>

<script>
	import GuestUserComponent from '../../components/purchase/GuestUserComponent';
	import PaymentInformationComponent from '../../components/purchase/PaymentInformationComponent';
	import ConfirmationComponent from '../../components/purchase/ConfirmationComponent';
	import PaymentStatusComponent from '../../components/purchase/PaymentStatusComponent';

	export default {
		name: 'purchase-component',
		props: [],
		components: {
			GuestUserComponent         ,
			PaymentInformationComponent,
			ConfirmationComponent      ,
			PaymentStatusComponent
		},
		computed: {
			userReady() {
				return true;
			},
			paymentReady() {

			},
			confirmationReady() {
				return this.Confirmation;
			}
		},
		created() {},
		methods: {
			updateUser(user) {
				this.user = user;
				this.stepChange(1);
			},
			updatePayment(payment) {
				this.Payment = payment;
			},
			updateConfirmation(confirm) {
				this.Confirmation = confirm;
			},
			updatePaymentStatus(status) {
				this.PaymentStatus = status;
			},
			stepChange(val) {
				this.PaymentStage += val;
			}
		},
		data() {
			return {
				PaymentStage  : 0,
				User          : 'guest',
				Payment       : {},
				Confirmation  : false,
				PaymentStatus : {}
			}
		}

	};
</script>

<style scoped>

</style>