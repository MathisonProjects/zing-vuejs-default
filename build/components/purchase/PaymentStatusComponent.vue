<template>
	<div class="card">
		<div class="card-header text-center">
			What next?
		</div>
		<div class="card-body">
			<p>Check your email, {{ data.email }}, and we will let you know the status of your payment.</p>
			<p>Thank you very much for your patronage! Your support is invaluable!</p>
			<p>- Jacob Mathison</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'payment-status-component',
		props: [
			'params' ,
			'data'
		],
		components: {},
		computed: {},
		created() {},
		methods: {},
		data() {
			return {}
		}

	};
</script>

<style scoped>

</style>