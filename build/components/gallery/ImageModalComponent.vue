<template>
	<div>
		<div class="modal fade show" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true"  style="display: block;">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="imageModalLabel">Gallery Name</h4>
						<button type="button" class="close" aria-label="Close" @click="$emit('close')">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class='row'>
							<div class='col'>
								Placeholder
							</div>
						</div>
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
export default {
	name      : "image-component",
	components: {},
	computed  : {
	},
	watch     : {},
	created() {},
	methods   : {
	},
	data() {
		return {
		}
	}
};
</script>
<style scoped>

</style>