<template>
	<div>
		<div class='form-group'>
			<label>Send To</label>
			<input type='text' class='form-control' />
		</div>
		<div class='form-group'>
			<textarea class="form-control mb-3" rows="5"></textarea>
		</div>
		<div class='text-right'>
			<button type='button' class='btn btn-primary'>Send Message</button>
		</div>
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