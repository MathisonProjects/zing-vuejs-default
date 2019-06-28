<template>
	<div>
		<CategoriesComponent :params='gallery.categories' />
		<AlbumsComponent />
		<ImagesComponent />
		<ImageModalComponent />

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
			}
		},
		watch     : {},
		created() {},
		methods   : {
			changeCategory(cat) {
				this.category = cat;
			},
			viewAll(index) {

			},
			viewImage(index) {

			}
		},
		data() {
			return {
				category: 'all',
				display : 'album',
				view    : {
					album : 0,
					iamge : 0
				},
				viewModal: false
			}
		}
	};
</script>
<style scoped>

</style>