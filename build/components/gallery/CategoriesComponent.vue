<template>
	<div>
		<button type='button' class='btn btn-primary mx-3' v-for='category in params'>{{ category.text }}</button>
	</div>
</template>
<script>
export default {
	name      : "categories-component",
	props: [
		'params'
	],
	components: { },
	computed  : { },
	watch     : { },
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