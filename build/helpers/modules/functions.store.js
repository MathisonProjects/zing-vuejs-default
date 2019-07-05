import { store } from '@store';

export default {
	init() {},
	doAlert(type) {
		store.dispatch('alertStore/setAlert', store.state.jsonStore.alerts[type]);
	},
	Logout() {
		store.dispatch('userStore/logout');
		this.doAlert('loggingOut');
		this.init();
	},
	uuidv4() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		    return v.toString(16);
		});
	}
}