export default {
	fire(data, endpoint) {
		axios.defaults.baseURL = 'http://' + window.location.hostname;
		return axios.post('/api/v1/' + endpoint, data);
	}
}