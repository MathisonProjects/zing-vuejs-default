// Need something cleaner for bringing these in...
window.Vue = require('vue');
import Vuex from 'vuex';
window.Vue.use(Vuex);

const store = require('../build/store.js')(Vuex);

export default {
	install(Vue) {
    	Object.defineProperty(Vue.prototype, '$funcs', { value: this });
	},
	init() {},
	doAlert(type) {
		store.dispatch('AlertStore/setAlert', store.state.JsonStore.alerts[type]);
	},
	Logout() {
		store.dispatch('UserStore/logout');
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