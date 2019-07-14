export default {
	state: {
		isLoaded: false,
		default : true ,
		users   : {}
	},
	mutations: {
		SET_LOADED(state, payload) {
			state.isLoaded = payload;
		},
		SET_USERS(state, payload) {
			state.users = payload;
		}
	},
	actions: {
		loadUsers({state, commit, dispatch}) {
			if (state.default == true) {
				var defaultForum = require('../../json/forum_default.json');
				commit('SET_USERS', defaultForum);
				dispatch('setLoaded');
			} else {
				dispatch('reloadUsers');
			}
		},
		reloadUsers({commit}) {
			commit('setUnloaded');
			console.log('Create a user loading source...');
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