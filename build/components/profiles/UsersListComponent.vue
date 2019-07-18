<template>
	<div>
		<h3>Users</h3>

		<tableComponent :table='TableParams' @callback='callback' />
	</div>
</template>

<script>
	import TableComponent from '@/components/TableComponent'
	export default {
    	name: 'users-list-component',
    	components: {
    		TableComponent
    	},
    	props: [],
    	computed: {
    		TableParams() {
				this.$Helper.functionsDatatable.reset();

				// Set End Fields
				this.$Helper.functionsDatatable.setEndFieldsEasy(true, false, false, false);

				// Set Fields
				var fields = this.$Helper.functionsDatatable.getDefaulFields([
						'User',
						'Last Seen',
						'Last Login'
					]);

				var items = this.tables;

				for (var i in items) {
					var func = {
						view  : {
							action: 'view',
							id    : items[i].id
						}
					}

					this.$Helper.functionsDatatable.addNewItem(items[i], func);
				}

				
				this.$Helper.functionsDatatable.setFields(fields);
				return this.$Helper.functionsDatatable.tableStructure;
    		}
    	},
		data() {
			return { }
		},
		methods: {
			callback(params) {
				console.log(params);
			}
		}
	};
</script>

<style scoped>

</style>