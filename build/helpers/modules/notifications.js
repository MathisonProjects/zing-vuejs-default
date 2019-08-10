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
	}
}