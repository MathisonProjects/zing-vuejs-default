<template>
	<div>
		<div class="card">
			<div class="card-header">
				What do you wish to proceed as?
			</div>
			<div class="card-body text-center">
				You are currently set as {{ user }}.
				<hr />
				<button type='button' class='btn btn-primary' @click='guest'>Proceed as Guest</button>
				<hr />
				<button type='button' class='btn btn-primary' @click='register' disabled>Register an Account</button>
				<hr />
				<button type='button' class='btn btn-primary' @click='login' disabled>Login to Account</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'guest-user-component',
		props: [
			'params'
		],
		components: {},
		computed: {},
		created() {},
		methods: {
			guest() {
				this.$emit('updateUser', 'guest')
			},
			register() {
				this.$emit('updateUser', 'guest')
			},
			login() {
				this.$emit('updateUser', 'guest')
			}
		},
		data() {
			return {
				user : this.params
			}
		},
		watch: {
			params(newval) {
				this.user = this.params;
			}
		}
	};
</script>

<style scoped>

</style>