<template>
	<div>
		<div class="modal fade show" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true"  style="display: block;">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="imageModalLabel">{{ albumSet.title }} - {{ imageShow.name }}</h4>
						<button type="button" class="close" aria-label="Close" @click="$emit('close')">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class='row'>
							<div class='col-12'>
								<img :src='imageShow.sizes.large' class='w-100' />
							</div>
							<div class='col-6 my-3 text-center'><button type='button' class='btn btn-primary' @click='changeImage(view.image - 1)'>Previous</button></div>
							<div class='col-6 my-3 text-center'><button type='button' class='btn btn-primary' @click='changeImage(view.image + 1)'>Next</button></div>
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
	name      : "image-modal-component",
	props     : [
		'view'
	],
	components: { },
	computed  : {
		albumSet() {
			return this.$store.state.galleryStore.albums[this.view.album];
		},
		imageShow() {
			return this.albumSet.images[this.view.image];
		}
	},
	watch     : {},
	created() {},
	methods   : {
		changeImage(id) {
			this.$emit('changeImage', id);
		}
	},
	data() {
		return {}
	}
};
</script>
<style scoped>

</style>