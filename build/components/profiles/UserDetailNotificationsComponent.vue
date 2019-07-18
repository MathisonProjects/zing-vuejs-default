<template>
	<div>
		<h3>Notifications</h3>

		<tableComponent :table='TableParams' @callback='callback' />
	</div>
</template>

<script>
	import TableComponent from '@/components/TableComponent'

	export default {
    	name: 'user-detail-notifications-component',
    	components: {
    		TableComponent
    	},
    	props: [
    		'expanded'
    	],
    	computed: {
    		TableParams() {
				this.$Helper.functionsDatatable.reset();

				// Set End Fields
				this.$Helper.functionsDatatable.setEndFieldsEasy(false, false, false, false);

				// Set Fields
				var fields = this.$Helper.functionsDatatable.getDefaulFields([
						'Event Type',
						'Message',
						'When'
					]);

				var items = this.tables;
				
				this.$Helper.functionsDatatable.setFields(fields);
				return this.$Helper.functionsDatatable.tableStructure;
    		}
    	},
		data() {
			return { }
		},
		methods: {
			callback(params) {}
		}
	};
</script>

<style scoped>

</style>