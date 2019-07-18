<template>
	<div>
		<h3>Messages</h3>

		<div class='row my-3'>
			<div class='col'>
				<button type='button' class='btn btn-warning'>Mark All As Read</button>
			</div>
			<div class='col text-right'>
				<button type='button' class='btn btn-primary'>Compose Message</button>
			</div>
		</div>

		<tableComponent :table='TableParams' @callback='callback' />
	</div>
</template>

<script>
	import TableComponent from '@/components/TableComponent'

	export default {
    	name: 'user-detail-messages-component',
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
						'Username',
						'Subject',
						'Date Sent'
					]);

				var items = this.tables;
				
				this.$Helper.functionsDatatable.setFields(fields);
				return this.$Helper.functionsDatatable.tableStructure;
    		}
    	},
		data() {
			return {}
		},
		methods: {
			callback(params) {}
		}
	};
</script>

<style scoped>

</style>