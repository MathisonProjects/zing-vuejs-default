<template>
	<div>
		AdminView
			- Secret Login
		PersonalView
			- Messages
			- Notifications
		ThirdPartyView

		Private?

		Username
		Image
		Email
		ID
		Role
		Last Login

		Friends
		Reviews

		Topics
		Comments

		Feedback

		<UsersListComponent />
		<UserDetailMessagesComponent />
		<UserDetailNotificationsComponent />
		<UserDetailSettingsComponent />
		<UserDetailGeneralComponent />
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
    	computed: {},
		data() {
			return { }
		},
		methods: {}
	};
</script>

<style scoped>
</style>