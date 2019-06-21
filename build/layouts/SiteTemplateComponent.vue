<template>
    <div>
		<BaseNav v-bind:navs='navOut' />
	        
		<div class='container my-3'>
			<AlertBox :args='alert' v-if='alert != null' class='my-3' />
	        <router-view></router-view>
		</div>

		<RecordInterest />
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
			'FootDComp'      : DefaultFooter ,
			'RecordInterest' : RecordInterestComponent
		},
		data() {
			return {
				navOut: [
					{
						page: 'about',
						text: 'About Me',
						sub : false,
						args: {}
					},
					{
						page: 'dev-diary',
						text: 'Dev Diary',
						sub : false,
						args: {}
					},
					{
						page: 'pricing',
						text: 'Pricing',
						sub : false,
						args: {}
					},
					{
						page: 'faq',
						text: 'FAQ',
						sub : false,
						args: {}
					},
					{
						page: 'contact',
						text: 'Contact Me',
						sub : false,
						args: {}
					},
					{
						page: 'register',
						text: 'Register',
						sub : {
							component: 'RegisterComponent'
						},
						args: {}
					},
					{
						page: 'login',
						text: 'Login',
						sub : {
							component: 'LoginComponent'
						},
						args: {}
					}
				],
				navIn: [
					{
						page: 'products',
						text: 'Products',
						sub : false,
						args: {}
					},
					{
						page: 'forum',
						text: 'Forum',
						sub : false,
						args: {}
					},
					{
						page: 'dev-diary',
						text: 'Dev Diary',
						sub : false,
						args: {}
					},
					{
						page: 'contact',
						text: 'Contact Me',
						sub : false,
						args: {}
					},
					{
						page: 'page-settings',
						text: 'Settings',
						sub : false,
						args: {}
					},
					{
						page: 'logout',
						text: 'Logout',
						sub : false,
						args: {}
					}
				]
			}
		},
		props: [],
		created() { },
		computed: {
			footer() {
				return {
					text: '©' + moment().format('YYYY') + ' <a href="#">zing.land</a> | <a href="https://twitter.com/SuiteZing" target="_BLANK">Follow Our Twitter</a>'
				};
			},
			alert() {
				return this.$store.state.AlertStore.alert;
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