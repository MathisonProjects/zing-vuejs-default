module.exports = function(Vuex){
	return new Vuex.Store({
		modules: {
			AlertStore       : require('../stores/AlertStore.js'),
			ConfirmationStore: require('../stores/ConfirmationStore.js'),
			JsonStore        : require('../stores/JsonStore.js'),
			NodeStore        : require('../stores/NodeStore.js'),
			UserStore        : require('../stores/UserStore.js')
		}
	});
}