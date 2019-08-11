<template>
    <div>
		<BaseNav v-bind:navs='nav.navOut' v-if='loggedIn == false' />
		<BaseNav v-bind:navs='navIn' v-if='loggedIn == true' />
		<div class='container my-3'>
			<AlertBox :args='alert' v-if='alert != null' class='my-3' />
			<notifications group="general" position='top left' classes='vue-notification' />
	        <router-view></router-view>
		</div>
		
		<VueBeautifulChat v-if='loggedIn' />
		<RecordInterest />

		<FootDComp :params='footer' />
    </div>
</template>

<script>
	import AlertBoxComponent from '../components/AlertBoxComponent';
	import AreYouSureComponent from '../components/default/AreYouSureComponent';

	import BaseNavComponent from '../components/BaseNavComponent';
	import RecordInterestComponent from '../components/RecordInterestComponent';

	import VueBeautifulChatComponent from '../components/VueBeautifulChatComponent';

	import DefaultFooter from './footers/DefaultFooter';
	import moment from 'moment';

	import CustomSite from '@custom';

	export default {
		name: 'site-template-component',
		components: {
			'AlertBox'         : AlertBoxComponent          ,
			'AreYouSure'       : AreYouSureComponent        ,
			'BaseNav'          : BaseNavComponent           ,
			'FootDComp'        : DefaultFooter              ,
			'RecordInterest'   : RecordInterestComponent    ,
			'VueBeautifulChat' : VueBeautifulChatComponent
		},
		data() {
			return { }
		},
		props: [],
		created() {

		},
		computed: {
			nav() {
				return this.$store.state.jsonStore.settings.links
			},
			navIn() {
				if (CustomSite.Inits != null) {
					if (this.$store.state.jsonStore.customJsonModules.loggedInNav) {
						return this.$store.state.jsonStore.customJsonModules.loggedInNav;
					}
				}
				
				return this.nav.navIn;
			},
			loggedIn() {
				return this.$store.getters['userStore/loggedIn'];
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

<style>
	.splashZing {
		background-image: url('https://radio.zing.land/images/Zing Splash.png');
	}
</style