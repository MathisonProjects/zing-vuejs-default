<template>
    <div>
		<BaseNav v-bind:navs='nav.navAdmin' v-if='loggedIn == true && role == "admin"' />
	        
		<div class='container my-3'>
			<AlertBox :args='alert' v-if='alert != null' class='my-3' />
	        <router-view></router-view>
		</div>

		<FootDComp :params='footer' />
    </div>
</template>

<script>
	import AlertBoxComponent from '../components/AlertBoxComponent';
	import AreYouSureComponent from '../components/default/AreYouSureComponent';

	import BaseNavComponent from '../components/BaseNavComponent';
	import RecordInterestComponent from '../components/RecordInterestComponent';

	import DefaultFooter from './footers/DefaultFooter';
	import moment from 'moment';

	export default {
		name: 'site-template-component',
		components: {
			'AlertBox'       : AlertBoxComponent          ,
			'AreYouSure'     : AreYouSureComponent        ,
			'BaseNav'        : BaseNavComponent           ,
			'FootDComp'      : DefaultFooter
		},
		data() {
			return { }
		},
		props: [],
		created() { },
		computed: {
			nav() {
				return this.$store.state.jsonStore.settings.links
			},
			loggedIn() {
				return this.$store.getters['userStore/loggedIn'];
			},
			role() {
				return null;
			},
			footer() {
				return {
					text: '©' + moment().format('YYYY') + ' <a href="#">zing.land</a> | <a href="https://twitter.com/SuiteZing" target="_BLANK">Follow Our Twitter</a>'
				};
			},
			alert() {
				return this.$store.state.alertStore.alert;
			}
		},
		methods: { }
	};
</script>

<style scoped>
	.splashZing {
		background-image: url('https://radio.zing.land/images/Zing Splash.png');
	}
</style