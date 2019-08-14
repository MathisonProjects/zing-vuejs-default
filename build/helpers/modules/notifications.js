import Vue from 'vue';

export default {
	fireNotification(title, text, type = "success") {
		Vue.notify({
		  group: 'general',
		  type : type,
		  title: title,
		  text : text
		});
	},
	runTest() {
		console.log('Running Notification Test');
		this.fireNotification('Test Notification', 'The test is successful!');
	},
	fireInfo(title, text) {
		this.fireNotification(title, text, 'info');
	},
	fireDanger(title, text) {
		this.fireNotification(title, text, 'danger');
	},
	loginSuccess() {
		this.fireNotification('Logging In', 'Your login is a success');
	},
	failLogin() {
		this.fireDanger('Logging In', 'Your login has failed.');
	}

}