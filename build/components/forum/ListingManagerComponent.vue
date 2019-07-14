<template>
	<div class='row'>
		<div class='col-3'>
			{{ listManagerText }}: {{ total }}
		</div>
		<div class='col-6'>
			<PaginationComponent />
		</div>
		<div class='col-3'>
			<PerPageComponent :perPage.sync='perPage' @pageChange='pageChangeComp' />
		</div>
	</div>
</template>

<script>
	import PerPageComponent from '../../components/PerPageComponent'
	import PaginationComponent from '../../components/PaginationComponent'
	export default {
		name: 'listing-manager-component',
		props: [
			'listManagerText',
			'total',
			'perPage'
		],
		components: {
			PerPageComponent,
			PaginationComponent
		},
		computed: {
		},
		data() {
			return {}
		},
		created() {},
		methods: {
			pageChangeComp(page) {
				this.$emit('pageChangeComp', page)
			},
		},
		watch: {},
		mounted() {}
	};
</script>

<style scoped>

</style>