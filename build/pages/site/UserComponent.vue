<template>
	<div>
		<div class='row'>
			<div class='col text-center'><router-link to='/profiles'>User List</router-link></div>
			<div class='col text-center'><router-link to='/profiles/1'>User</router-link></div>
			<div class='col text-center'><router-link to='/profiles/messages'>My Messages</router-link></div>
			<div class='col text-center'><router-link to='/profiles/notifications'>My Notifications</router-link></div>
			<div class='col text-center'><router-link to='/profiles/settings'>My Settings</router-link></div>
		</div>

		<UsersListComponent               v-if="page.id === undefined" />
		<UserDetailGeneralComponent       v-if='Number.isInteger(page.id)' />
		<UserDetailMessagesComponent      v-if='page.id == "messages"' />
		<UserDetailNotificationsComponent v-if='page.id == "notifications"' />
		<UserDetailSettingsComponent      v-if='page.id == "setting"' />
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