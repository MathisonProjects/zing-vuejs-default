<template>
	<nav aria-label="Page navigation">
		<ul class="pagination">
			<li class="page-item"><a class="page-link" href="#">Previous</a></li>
			<li class="page-item" v-for='item in totalPages'><a class="page-link" href='javascript:void(0)' @click='ChangePage(item)'>{{ item }}</a></li>
			<li class="page-item"><a class="page-link" href="#">Next</a></li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'pagination-component',
	props: [
		'perPage',
		'count'
	],
	components: {},
	computed: {
		totalPages() {
			return Math.ceil(this.count/this.perPage);
		}
	},
	data() {
		return {}
	},
	created() {},
	methods: {
		ChangePage(page) {
			this.$emit('changePage', page);
		}
	},
	watch: {},
	mounted() {}
};
</script>

<style scoped>

</style>