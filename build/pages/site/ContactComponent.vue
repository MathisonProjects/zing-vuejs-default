<template>
	<div>
		<div class="card">
			<div class="card-header">
				Contact
			</div>
			<div class="card-body">
				<h5 class="card-title">Message Information</h5>
				<p class="card-text">
					<div class='form-group'>
						<label for="">Reason</label>
						<select class='form-control' name='reason' id='reason' v-model='reason'>
							<option>--PICK OPTION--</option>
							<option value="General">General</option>
							<option value="General">Request</option>
							<option value="General">Question</option>
							<option value="General">Bug Report</option>
						</select>
					</div>
					<div class='form-group'>
						<label for="">Subject <a href='#' title='I do format the subject to help filter direct emails and emails through the site.'>[?]</a></label>
						<input type='text' class='form-control' name='subject' id='subject' v-model='subject' placeholder="EG: Exciting Meetup Plans" />
					</div>
					<div class='form-group'>
						<label for="">Email</label>
						<input type='text' class='form-control' name='email' id='email' v-model='email' placeholder="EG: me@example.net" />
					</div>
					<div class='form-group'>
						<label for="">Phone Number</label>
						<input type='text' class='form-control' name='phone_number' id='phone_number' v-model='phone_number' placeholder="EG: +14025555555" />
					</div>
					<div class='form-group'>
						<label for="">Name</label>
						<input type='text' class='form-control' name='name' id='name' v-model='name' placeholder="EG: Jon Doe" />
					</div>
					<div class='form-group'>
						<label for="">Message</label>
						<textarea class='form-control' name='message' id='message' v-model='message' placeholder="Put your message here!"></textarea>
					</div>
				</p>
				<button type='button' class='btn btn-primary' v-on:click='sendMessage'>Fire Away!</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'contact-component',
		props: [],
		components: {},
		computed: {},
		created() {},
		methods: {
			sendMessage() {
				// EXAMPLE
				// axios.defaults.baseURL = 'https://www.mathisonprojects.com/api/';
				axios.defaults.baseURL = 'http://www.yoursite.com/api/'
				var data = {
					reason       : this.reason,
					subject      : this.subject,
					email        : this.email,
					phone_number : this.phone_number,
					name         : this.name,
					message      : this.message
				}

				this.reason       = '';
				this.subject      = '';
				this.email        = '';
				this.phone_number = '';
				this.name         = '';
				this.message      = '';

				console.log(data);

				axios.post('MESSAGEENDPOINT', data);

				alert('Message has been sent!')
			}
		},
		data() {
			return {
				reason       : '',
				subject      : '',
				email        : '',
				phone_number : '',
				name         : '',
				message      : ''
			}
		}

	};
</script>

<style scoped>

</style>