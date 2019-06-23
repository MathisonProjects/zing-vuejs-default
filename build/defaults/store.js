module.exports = {
	namespaced: true,
	state: {
		isLoaded: false
	},
	mutations: {
		SET_LOADED(state, payload) {
			state.isLoaded = payload;
		}
	},
	actions: {
		setLoaded({commit}) {
			commit('SET_LOADED', true);
		},
		setUnloaded({commit}) {
			commit('SET_LOADED', false);
		}
	}
};