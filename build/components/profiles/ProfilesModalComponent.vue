<template>
	<div>
		<div class="modal fade show" id="itemModal" tabindex="-1" role="dialog" aria-labelledby="itemModalLabel" aria-hidden="true"  style="display: block;">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="itemModalLabel">{{ params.title }}</h4>
						<button type="button" class="close" aria-label="Close" @click="$emit('close')">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<ModalSendMessageComponent v-if='params.modal == "message"' />
						<ModalConnectComponent     v-if='params.modal == "connect"' />
						<ModalUseAccountComponent  v-if='params.modal == "useAccount"' />
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
					</div>
				</div>
			</div>
		</div>
		<div class="modal-backdrop fade show"></div>
		<div class="modal-backdrop fade show"></div>
	</div>
</template>

<script>
	import ModalSendMessageComponent from './ModalSendMessageComponent'
	import ModalConnectComponent     from './ModalConnectComponent'
	import ModalUseAccountComponent  from './ModalUseAccountComponent'

	export default {
		name: 'profiles-modal-component',
		props: [
			'params'
		],
		components: {
			ModalSendMessageComponent,
			ModalConnectComponent    ,
			ModalUseAccountComponent
		},
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
	.modalBackground {
		background-color: black;
		opacity: 0.5;
		background-size: cover;
	}
</style>