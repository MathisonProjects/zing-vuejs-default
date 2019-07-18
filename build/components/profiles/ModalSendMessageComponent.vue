<template>
	<div class='text-right'>
		<textarea class="form-control mb-3" rows="5"></textarea>

		<button type='button' class='btn btn-primary'>Send Message</button>
	</div>
</template>

<script>

	export default {
		name: 'message-profiles-modal-component',
		props: [
			'params'
		],
		components: { },
		computed  : { },
		created() { },
		methods   : {
		},
		data() {
			return {}
		}
	};
</script>

<style scoped>
</style>