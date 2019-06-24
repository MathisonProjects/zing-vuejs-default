<template>
	<div>
		<LandingComponent v-if='home == "landing"' />
		<FormCaptureComponent v-if='home == "form"' />
		<SalesComponent v-if='home == "sales"' />
	</div>
</template>

<script>
	import LandingComponent from '../../components/home/LandingComponent';
	import FormCaptureComponent from '../../components/home/FormCaptureComponent';
	import SalesComponent from '../../components/home/SalesComponent';
	export default {
		name: 'home-component',
		props: [],
		components: {
			LandingComponent,
			FormCaptureComponent,
			SalesComponent
		},
		computed: {
			home() {
				return this.$store.state.JsonStore.settings.home
			}
		},
		created() {},
		methods: {},
		data() {
			return {}
		}

	};
</script>

<style scoped>

</style>