<template>
	<div class='InterestBoxArea' v-if='DisplayInterestBox'>
		<div class="card">
			<div :class="ChatHeaderColor">
				<div class='row'> <!-- TOP BAR -->
					<div class='col'>Want To Signup On Release?</div>
					<div class='col-1'>
						<a href='javascript:void(0)'><i class="fa fa-window-minimize" aria-hidden="true" v-if='!MinimizedInterest' @click='MinimizedInterest = true'></i></a>
						<a href='javascript:void(0)'><i class="fa fa-window-maximize" aria-hidden="true" v-if='MinimizedInterest' @click='MinimizedInterest = false'></i></a>
					</div>
				</div>
			</div>
			<div class="card-body responseArea" v-if='!MinimizedInterest'>
				<div class='form-group'>
					<label>First Name</label>
					<input type='text' class='form-control' v-model='Form.FirstName' />
				</div>

				<div class='form-group'>
					<label>Last Name</label>
					<input type='text' class='form-control' v-model='Form.LastName' />
				</div>

				<div class='form-group'>
					<label>Email</label>
					<input type='text' class='form-control' v-model='Form.Email' />
				</div>

				<div class='form-group'>
					<label>Suggestions</label>
					<textarea class='form-control' v-model='Form.Suggestions'></textarea>
				</div>
				<button type='button' class='btn btn-primary' @click='RecordInterest' :disabled='InterestReady'>Save My Spot</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'record-interest-component',
		computed: {
			InterestReady() {
				var disabled = true;

				if (
					this.FirstName != '' &&
					this.LastName  != '' &&
					this.Email     != ''
				) {
					disabled = false;
				}
				return disabled;
			},
			ChatHeaderColor() {
				return 'card-header text-white bg-dark'
			}
		},
		data () {
	    	return {
	    		Form : {
	    			Service    : 'Radio',
	    			FirstName  : '',
	    			LastName   : '',
	    			Email      : '',
	    			Suggestions: ''
	    		},
	    		MinimizedInterest  : true,
	    		DisplayInterestBox : true
			}
		},
		methods: {
			RecordInterest() {
				axios.post('api/v1/services/recordInterest', this.Form).then(response => {
					this.$funcs.doAlert('interestRecorded');
					this.DisplayInterestBox = false;
				});
			}
		},
		created () { }
	};
</script>

<style scoped>
	.InterestBoxArea {
		position: fixed;
		left: 0px;
		bottom: 60px;
		width: 300px;
	}

	.responseArea {
		overflow-y: scroll;
		height: 300px;
		max-height: 300px;
	}
</style>