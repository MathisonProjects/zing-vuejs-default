module.exports = {
	namespaced: true,
	state: {
		isLoaded    : false,
		shopEnabled : true,
		default     : true ,
		items       : {}
	},
	mutations: {
		SET_LOADED(state, payload) {
			state.isLoaded = payload;
		},
		SET_ITEMS(state, payload) {
			state.items = payload;
		}
	},
	actions: {
		loadStore({state, commit, dispatch}) {
			if (state.default == true) {
				var defaultItems = require('../json/shopItems.example.json');
				commit('SET_ITEMS', defaultItems);
				dispatch('setLoaded');
			} else {
				dispatch('reloadItems');
			}
		},
		reloadForum({commit}) {
			commit('setUnloaded');
			console.log('Create a items loading source...');
			commit('setLoaded');
		},
		setLoaded({commit}) {
			commit('SET_LOADED', true);
		},
		setUnloaded({commit}) {
			commit('SET_LOADED', false);
		}
	}
};