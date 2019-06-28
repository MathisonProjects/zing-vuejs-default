<template>
	<div>
		<CategoriesComponent :params='gallery.categories' class='my-3' />
		<AlbumsComponent v-if='display == "album"' :params='gallery.albums' class='my-3' @viewAlbum='viewAlbum' />
		<ImagesComponent v-if='display == "images"' :params='images' class='my-3' />
		<ImageModalComponent v-if='viewModal' @close='close' />

	</div>
</template>
<script>
	import CategoriesComponent from '../../components/gallery/CategoriesComponent';
	import AlbumsComponent     from '../../components/gallery/AlbumsComponent';
	import ImagesComponent     from '../../components/gallery/ImagesComponent';
	import ImageModalComponent from '../../components/gallery/ImageModalComponent';

	export default {
		name      : "gallery-component",
		components: {
			CategoriesComponent,
			AlbumsComponent    ,
			ImagesComponent    ,
			ImageModalComponent
		},
		computed  : {
			gallery() {
				return this.$store.getters['galleryStore/gallery'];
			},
			images() {
				return [];
			},
			albumChosen() {
				return this.gallery.albums[this.view.album];
			}
		},
		watch     : {},
		created() {},
		methods   : {
			changeCategory(cat) {
				this.category = cat;
			},
			setView(album, image) {
				this.view = {
					album : album,
					image : image
				}
				this.viewModal = true;
			},
			viewAlbum(id) {
				this.setView(id, 0);
			},
			viewImage(index) {

			},
			close() {
				this.viewModal = false;
			}
		},
		data() {
			return {
				category: 'all',
				display : 'album',
				view    : {
					album : 0,
					image : 0
				},
				viewModal: false
			}
		}
	};
</script>
<style scoped>

</style>