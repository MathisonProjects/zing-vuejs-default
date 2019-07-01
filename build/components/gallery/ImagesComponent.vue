<template>
	<div>
		<div class='row'>
			<div class='col-lg-3 col-md-4 col-sm-6 col-xs-12' v-for='image in images'>
				<div class="card">
					<div class="card-header">
						<a href="javascript:void(0)"><h5 class="card-title">{{ image.name }}</h5></a>
					</div>
					<img class="card-img" :src="image.sizes.small" alt="Card image" />
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name      : "images-component",
	props     : [
		'params',
		'category'
	],
	components: {},
	computed  : {
		albums() {
			return this.params;
		},
		images() {
			var images = [];
			for (var i in this.albums) {
				if (this.category == "all" || this.albums[i].category == this.category) {
					for (var j in this.albums[i].images) {
						images.push(this.albums[i].images[j]);
					}
				}
			}

			return images;
		}
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