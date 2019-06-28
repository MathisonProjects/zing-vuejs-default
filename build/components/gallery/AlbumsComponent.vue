<template>
	<div>
		<div class='row'>
			<div class='col-md-3 col-sm-6 col-xs-12' v-for='album in albums'>
				<div class="card">
					<div class="card-header">
						<a href="javascript:void(0)" @click='viewAlbum(album.id)'><h5 class="card-title">{{ album.title }}</h5></a>
					</div>
					<img class="card-img" :src="album.cover" alt="Card image" @click='viewAlbum(album.id)'>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name      : "albums-component",
	props     : [
		'params'
	],
	components: {},
	computed  : {
		albums() {
			return this.params
		}
	},
	watch     : {},
	created() {},
	methods   : {
		viewAlbum(id) {
			this.$emit('viewAlbum', id);
		}
	},
	data() {
		return {
		}
	}
};
</script>
<style scoped>

</style>