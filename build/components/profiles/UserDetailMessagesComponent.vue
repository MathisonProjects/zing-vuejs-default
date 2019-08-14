<template>
	<div>
		<h3>Messages</h3>

		<div class='row my-3'>
			<div class='col'>
				<button type='button' class='btn btn-warning'>Mark All As Read</button>
			</div>
			<div class='col text-right'>
				<button type='button' class='btn btn-primary' @click='openModal("Message", "message", {})'>Compose Message</button>
			</div>
		</div>

		<tableComponent :table='TableParams' @callback='callback' />

		<ProfilesModalComponent v-if='displayModal' @close='closeModal' :params='modalParams' />
	</div>
</template>

<script>
	import TableComponent from '@/components/TableComponent';
	import ProfilesModalComponent from './ProfilesModalComponent';


	export default {
    	name: 'user-detail-messages-component',
    	components: {
    		TableComponent,
    		ProfilesModalComponent
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
			return {
				displayModal: false,
				modalParams: {}
			}
		},
		methods: {
			callback(params) {},

			openModal(title, modal, args = {}) {
				this.modalParams = {
					title : title,
					modal : modal,
					args  : args
				};
				this.displayModal = true;
			},
			closeModal() {
				this.displayModal = false;
			}
		}
	};
</script>

<style scoped>

</style>