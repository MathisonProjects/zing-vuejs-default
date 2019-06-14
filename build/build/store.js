module.exports = function(Vuex){
	return new Vuex.Store({
		modules: {
			AlertStore       : require('../store/AlertStore.js'),
			ConfirmationStore: require('../store/ConfirmationStore.js'),
			JsonStore        : require('../store/JsonStore.js'),
			NodeStore        : require('../store/NodeStore.js'),
			UserStore        : require('../store/UserStore.js')
		}
	});
}