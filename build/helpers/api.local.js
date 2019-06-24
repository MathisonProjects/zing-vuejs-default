export default {
	install: function(Vue) {
    	Object.defineProperty(Vue.prototype, '$local', { value: this });
	},
	fire(data, endpoint) {
		axios.defaults.baseURL = 'http://' + window.location.hostname;
		return axios.post('/api/v1/' + endpoint, data);
	}
}