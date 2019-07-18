<template>
	<div>
		<p>Would you like to connect with {{ params.user }}</p>
	</div>
</template>

<script>

	export default {
		name: 'connect-profiles-modal-component',
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