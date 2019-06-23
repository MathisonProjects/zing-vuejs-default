module.exports = {
	namespaced: true,
	state: {
		isLoaded: false,
		default : true ,
		forum   : {}
	},
	mutations: {
		SET_LOADED(state, payload) {
			state.isLoaded = payload;
		},
		SET_FORUM(state, payload) {
			state.forum = payload;
		}
	},
	actions: {
		loadForum({state, commit, dispatch}) {
			if (state.default == true) {
				var defaultForum = require('../json/forum_default.json');
				commit('SET_FORUM', defaultForum);
				dispatch('setLoaded');
			} else {
				console.log('Create a forum loading source...');
			}
		},
		setLoaded({commit}) {
			commit('SET_LOADED', true);
		},
		setUnloaded({commit}) {
			commit('SET_LOADED', false);
		}
	}
};