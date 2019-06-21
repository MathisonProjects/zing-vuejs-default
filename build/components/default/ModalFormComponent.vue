<template>
	<b-modal ref="ModalForm" hide-footer title="Are you sure?">
		<div class="d-block text-center">
			<component :is='form' :params='formParams' />
		</div>
		<b-button class="mt-3" variant="outline-danger" block @click="DontConfirm">No</b-button>
		<b-button class="mt-2" variant="outline-primary" block @click="Confirm">Confirm</b-button>
    </b-modal>
</template>

<script>
    export default {
    	name: 'modal-form-component',
    	props: [
    		'params'
    	],
    	components: { },
    	created() { },
    	computed: { },
		data() {
			form       : this.params.form,
			func       : this.params.func,
			formParams : this.params.formParams,
			successArgs: this.params.successArgs
		},
		methods: {
			Submit() {
				this.$refs['ModalForm'].hide();
				this.$funcs[this.func]();
			},
			DontConfirm() {
				this.$refs['ModalForm'].hide();
			}
		},
		mounted() {
			this.$refs['ModalForm'].show();
		}
    }
</script>