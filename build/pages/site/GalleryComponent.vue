<template>
	<div>
		<CategoriesComponent :params='gallery.categories' :category.sync='category' @changeCategory='changeCategory' class='my-3' />
		<AlbumsComponent v-if='display == "album"' :params='gallery.albums' :category.sync='category' class='my-3' @viewAlbum='viewAlbum' />
		<ImagesComponent v-if='display == "images"' :params='images' class='my-3' />
		<ImageModalComponent v-if='viewModal' @close='close' @changeImage='changeImage' :view.sync='view' />

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
			changeImage(id) {
				var albumLength = this.albumChosen.images.length;
				if (id < 0) {
					id = albumLength + id;
				}
				var newId = id % albumLength;
				this.view.image = newId;
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