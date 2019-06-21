<template>
	<b-modal size='lg' ref="AreYouSureModal" hide-footer title="Are you sure?" @click-outside='DontConfirm'>
		<div class="d-block text-center">
			<h3>You are about to {{ ConfirmData.actionText }}.</h3>
		</div>
		<b-button class="mt-3" variant="outline-danger" block @click="DontConfirm">No</b-button>
		<b-button class="mt-2" variant="outline-primary" block @click="Confirm">Confirm</b-button>
    </b-modal>
</template>

<script>
    export default {
    	name: 'are-you-sure-component',
    	props: [ ],
    	components: { },
    	created() {},
    	computed: {
    		ConfirmData() {
    			return this.$store.state.ConfirmationStore;
    		}
    	},
		data() {
			return { }
		},
		methods: {
			Confirm() {

				this.$refs['AreYouSureModal'].hide();
				this.$funcs[this.ConfirmData.func]();
				this.$store.dispatch('ConfirmationStore/finishConfirmation', true);

			},
			DontConfirm() {
				this.$refs['AreYouSureModal'].hide();
				this.$store.dispatch('ConfirmationStore/finishConfirmation', false);
			}
		},
		mounted() {
			this.$refs['AreYouSureModal'].show();
		}
    }
</script>