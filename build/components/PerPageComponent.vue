<template>
	<div class='form-group'>
		<label>Per Page</label>
		<select class='form-control' v-model.number='totalPerPage'>
			<option></option>
			<option value.num='10'>10</option>
			<option value.num='25'>25</option>
			<option value.num='50'>50</option>
			<option value.num='100'>100</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'per-page-component',
	props: [
		'perPage'
	],
	components: {},
	computed: {},
	data() {
		return {
			totalPerPage: this.perPage
		}
	},
	created() {},
	methods: {},
	watch: {
		totalPerPage(newval) {
			this.$emit('pageChange', newval);
		},
		perPage(newval) {
			this.totalPerPage = this.perPage;
		}
	},
	mounted() {}
};
</script>

<style scoped>

</style>