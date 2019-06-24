module.exports = function(Vuex){
	return new Vuex.Store({
		modules: {
			AlertStore       : require('../stores/AlertStore.js'),
			BlogStore        : require('../stores/BlogStore.js'),
			CartStore        : require('../stores/CartStore.js'),
			ConfirmationStore: require('../stores/ConfirmationStore.js'),
			ForumStore       : require('../stores/ForumStore.js'),
			JsonStore        : require('../stores/JsonStore.js'),
			NodeStore        : require('../stores/NodeStore.js'),
			UserStore        : require('../stores/UserStore.js'),
			UsersStore       : require('../stores/UsersStore.js')
		}
	});
}