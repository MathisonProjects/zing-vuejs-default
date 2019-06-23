<template>
	<h6>
		<span v-for='link in breadcrumbs'>
			<router-link :to='link'>{{ link }}</router-link> <span v-if='breadcrumbs[breadcrumbs.length - 1] != link'> > </span>
		</span>
	</h6>
</template>

<script>
export default {
	name: 'breadcrumbs-component',
	props: [
		'firstCrumb'
	],
	components: {},
	computed: {
		params() {
			return this.$route.params;
		},
		breadcrumbs() {
			var breadcrumbs = [
				this.firstCrumb
			];

			var count = 0;
			for (var i in this.params) {
				breadcrumbs.push(breadcrumbs[count] + '/' + this.params[i]);
				count++;
			}

			return breadcrumbs;
		}
	},
	data() {
		return {}
	},
	created() {},
	methods: {},
	watch: {},
	mounted() {}
};
</script>

<style scoped>

</style>