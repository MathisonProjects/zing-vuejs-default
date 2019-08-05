export default {
	state: {
		siteMode: 'light'
	},
	mutations: {
		SET_SITEMODE(state, payload) {
			state.siteMode = payload;
		},
	},
	actions: {
		setMode({commit}, payload) {
			commit('SET_SITEMODE', payload);
		}
	}
};