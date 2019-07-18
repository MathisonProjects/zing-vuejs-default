export default {
	state: {
		alert : {}
	},
	mutations: {
		DO_RESET(state, payload) {
			state.alert = payload.alert;
		},
		SET_ALERT(state, payload) {
			state.alert = payload;
		}
	},
	actions: {
		setAlert({commit}, payload) {
			// message, type, duration
			commit('SET_ALERT', payload)
			setTimeout(() => 
				commit('SET_ALERT', {}),
				payload.duration);
		}
	},
	getters: {
		alert : state => state.alert,
	}
};