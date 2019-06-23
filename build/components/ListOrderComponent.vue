<template>
	<div>
		<label>Order</label>
		<select class='form-control' v-model='newestToOldest'>
			<option></option>
			<option value='true'>Newest to Oldest</option>
			<option value='false'>Oldest to Newest</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'list-order-component',
	props: [
		'listOrder'
	],
	components: {},
	computed: {
	},
	data() {
		return {
			newestToOldest: this.listOrder
		}
	},
	created() {},
	methods: {},
	watch: {
		newestToOldest(newval) {
			this.$emit('listOrderChange', newval);
		},
		listOrder(newval) {
			this.newestToOldest = this.listOrder;
		}
	},
	mounted() {}
};
</script>

<style scoped>

</style>