import { store } from '@store';
import cssLoad from 'loads-css';
        

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
	},
	setTheme() {
		console.log(store.state.settingsStore.siteMode);
		
		if (store.state.settingsStore.siteMode == 'light') {
			cssLoad('scss/app.css', function() {});	
		} else if (store.state.settingsStore.siteMode == 'dark') {
			cssLoad('scss/app.dark.css', function() {});	
		}
		
	}

}