<template>
	<div>
		<LandingComponent v-if='home == "landing" && loggedIn == false' />
		<FormCaptureComponent v-if='home == "form" && loggedIn == false' />
		<SalesComponent v-if='home == "sales" && loggedIn == false' />
		<DashboardComponent v-if='loggedIn == true' />
	</div>
</template>

<script>
	import LandingComponent from '../../components/home/LandingComponent';
	import FormCaptureComponent from '../../components/home/FormCaptureComponent';
	import SalesComponent from '../../components/home/SalesComponent';
	import DashboardComponent from '../../components/home/DashboardComponent';
	export default {
		name: 'home-component',
		props: [],
		components: {
			LandingComponent,
			FormCaptureComponent,
			SalesComponent,
			DashboardComponent
		},
		computed: {
			home() {
				return this.$store.state.jsonStore.settings.home
			},
			loggedIn() {
				return this.$store.getters['userStore/loggedIn'];
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