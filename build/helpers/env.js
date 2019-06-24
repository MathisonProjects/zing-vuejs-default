export default {
	install: function(Vue) {
    	Object.defineProperty(Vue.prototype, '$env', { value: this });
	},
	init() {
		console.log('Setting Environment Variables...')
		console.log('Sort out .env integration...');
		// this.settings = new Dotenv();
	}
};