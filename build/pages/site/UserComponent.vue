<template>
	<div>

		<div class='row'>
			<div class='col text-center'><router-link to='/profiles'><i class="fa fa-users" aria-hidden="true"></i> User List ({{ totalUsers }})</router-link></div>
			<div class='col text-center'><router-link to='/profiles/1'><i class="fa fa-user" aria-hidden="true"></i> My Account</router-link></div>
			<div class='col text-center'><router-link to='/profiles/messages'><i class="fa fa-envelope" aria-hidden="true"></i> My Messages ({{ myMessages }})</router-link></div>
			<div class='col text-center'><router-link to='/profiles/notifications'><i class="fa fa-bell" aria-hidden="true"></i> My Notifications ({{ myNotifications }})</router-link></div>
			<div class='col text-center'><router-link to='/profiles/settings'><i class="fa fa-cog" aria-hidden="true"></i> My Settings</router-link></div>
		</div>

		<hr />

		<UsersListComponent               v-if="page.id === undefined" />
		<UserDetailGeneralComponent       v-if='Number.isInteger(Number(page.id))' />
		<UserDetailMessagesComponent      v-if='page.id == "messages"' />
		<UserDetailNotificationsComponent v-if='page.id == "notifications"' />
		<UserDetailSettingsComponent      v-if='page.id == "settings"' />
	</div>
</template>

<script>
	import UsersListComponent from '@/components/profiles/UsersListComponent'
	import UserDetailMessagesComponent from '@/components/profiles/UserDetailMessagesComponent'
	import UserDetailNotificationsComponent from '@/components/profiles/UserDetailNotificationsComponent'
	import UserDetailSettingsComponent from '@/components/profiles/UserDetailSettingsComponent'
	import UserDetailGeneralComponent from '@/components/profiles/UserDetailGeneralComponent'

	export default {
    	name: 'profile-component',
    	components: {
    		UsersListComponent              ,
			UserDetailMessagesComponent     ,
			UserDetailNotificationsComponent,
			UserDetailSettingsComponent     ,
			UserDetailGeneralComponent
    	},
    	props: [
    	],
    	computed: {
    		page() {
    			return this.$route.params;
    		},
    		yourProfileViewing() {

    		},
    		myMessages() {
    			return 0;
    		},
			myNotifications() {
    			return 0;
			},
			totalUsers() {
				return 0;
			}
    	},
		data() {
			return { }
		},
		methods: {},
		mounted() {
		}
	};
</script>

<style scoped>
</style>