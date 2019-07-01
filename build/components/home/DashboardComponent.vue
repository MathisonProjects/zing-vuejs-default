<template>
	<div>
		<h3>The Zing of You</h3>

		<div class='row my-3'>
			<div class='col'>
				<select class='form-control' v-model='ServiceShown'>
					<option></option>
					<option v-for='service in ServicesList' :disabled='service.using' :value='service.value'>{{ service.text }}</option>
				</select>
			</div>
		</div>
		<div class='row'>
			<div class='col-7'>
				<h4>Billing History</h4>

				<div class='row bg-secondary text-white'>
					<div class='col text-center border'>ID</div>
					<div class='col text-center border'>When</div>
					<div class='col-3 text-center border'>Service</div>
					<div class='col text-center border'>Amount</div>
					<div class='col text-center border'>Questions?</div>
				</div>
				<div class='row' v-for='billItem in DashboardInformation.BillingHistory'>
					<div class='col text-center border'>{{ billItem.tid }}</div>
					<div class='col text-center border'>{{ billItem.datetime }}</div>
					<div class='col-3 text-center border'>{{ billItem.Service }}</div>
					<div class='col text-center border'>{{ billItem.amount }}</div>
					<div class='col text-center border'><button type='button' class='btn btn-info' @click='ContactAbout(billingItem.tid)'>Query</button></div>
				</div>

				<div class='row' v-if='DashboardInformation.BillingHistory.length == 0'>
					<div class='col text-center border'>
						<h5>You have no transactions!</h5>
					</div>
				</div>
			</div>
			<div class='col'>
				<div class='row'>
					<div class='col' v-if='CurrentService != {}'>
						<div class="card w-100">
							<div class="card-header">
								<h3>Service Information</h3>
							</div>
							<div class="card-body" v-if='Object.keys(CurrentService).length !== 0'>
								<h6>Current Service</h6> {{ CurrentService.name }}</p>
								<p>Length of Current Service: {{ CurrentService.lengthOfService }} Days</p>
								<button type='button' class='btn btn-danger' @click='CancelService(CurrentService.sid)'>Cancel Service</button>
							</div>
							<div class="card-body" v-if='Object.keys(CurrentService).length === 0'>
								Why don't you check out our services?
							</div>
						</div>
					</div>
				</div>
				<div class='row my-3'>
					<div class='col' v-if='Stripe != null'>
						<div class="card w-100">
							<div class="card-header">
								<h3>Account Information</h3>
							</div>
							<div class="card-body">
								<div>Username: {{ User.username }}</div>
								<div>
									{{ User.first_name }} {{ User.last_name }}<br />
									{{ Stripe.address.line1 }}, {{ Stripe.address.line2 }}<br />
									{{ Stripe.address.city }} {{ Stripe.address.state }}, {{ Stripe.address.postal_code }}<br />
									{{ Stripe.address.country }}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class='row'>
					<div class='col'>
						<div class="card w-100">
							<div class="card-header">
								<h3>Log History</h3>
							</div>
							<div class="card-body">
								<div class='row'>
									<div class='col'>
										<button type='button' class='btn btn-primary btn-block' @click='DownloadHistory'>Download</button>
									</div>
									<div class='col'>
										<button type='button' class='btn btn-danger btn-block' @click='ClearHistory'>Clear</button>
									</div>
								</div>
							</div>
							<div class='logOverflow'>
								<div class='row'>
									<div class='col-12' v-for='logItem in DashboardInformation.LogHistory'>
										<a href='#' class='text-danger' @click='DeleteHistoricalItem(logItem.id)'>X</a> | {{ logItem.datetime }} - {{ logItem.description }}
									</div>
									<div class='col-12'>Feature In Development</div>
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
export default {
	name      : "dashboard-component",
	props     : [],
	components: {},
	computed  : {
		DashboardInformation() {
			var data = {
				BillingHistory : [],
				CurrentService : {},
				LengthOfService: 0 ,
				LogHistory     : []
			}

    		return data;
    	},
    	User() {
			return this.$store.state.userStore.user;
    	},
		Stripe() {
			return this.$store.state.userStore.data.stripe;
		},
		Services() { 
			return null;
		},
		CurrentService() {
			return {};
		},
		ServicesList() {
			return this.$store.state.jsonStore.servicesList;
		}
	},
	watch     : {},
	created() {},
	methods   : {
		DownloadHistory() {},
		ClearHistory() {},
		ContactAbout(id) {},
		CancelService(id) {}
	},
	data() {
		return {
			ServiceShown: 'Zing Home',
		}
	}
};
</script>
<style scoped>

</style>