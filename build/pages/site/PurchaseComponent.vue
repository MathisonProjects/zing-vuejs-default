<template>
	<div>
		<h3 v-if='PaymentStage < 3'>Proceeding to Purchase</h3>
		<h3 v-if='PaymentStage == 3'>Processing Purchase</h3>
		<div class='row my-3'>
			<div class='col-sm-3 col-xs-12'>
				<button type='button' class='btn btn-primary btn-block' @click='stepChange(-1)' :disabled='PaymentStage == 0'>Previous</button>
			</div>
			<div class='col-sm-3 offset-sm-6 col-xs-12'>
				<button type='button' class='btn btn-primary btn-block' @click='stepChange(1)' :disabled='PaymentStage == 3'>Next</button>
			</div>
		</div>
		<GuestUserComponent v-if='PaymentStage == 0' :params.sync='User' @updateUser='updateUser' />
		<PaymentInformationComponent v-if='PaymentStage == 1' :params.sync='Payment' @updatePayment='updatePayment' />
		<ConfirmationComponent v-if='PaymentStage == 2' :params.sync='Confirmation' :data.sync='Payment' @updateConfirmation='updateConfirmation' />
		<PaymentStatusComponent v-if='PaymentStage == 3' :data.sync='Payment' :params.sync='PaymentStatus' />
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
				this.stepChange(1);
			},
			updateConfirmation(args) {
				this.Confirmation = args[0];
				this.PaymentStatus = args[1];
				this.$store.dispatch('cartStore/resetCart');
				this.$funcs.doAlert('purchaseComplete');
				this.stepChange(1);
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