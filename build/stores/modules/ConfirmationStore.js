export default  {
	state: {
		display    : false,
		actionText : '',
		func       : '',
		args       : {},
		proceed    : false
	},
	mutations: {
		SET_DISPLAY(state, payload) {
			state.display = payload;
		},
		SET_ACTION(state, payload) {
			state.actionText = payload;
		},
		SET_ARGS(state, payload) {
			state.args = payload;
		},
		SET_FUNC(state, payload) {
			state.func = payload;
		},
		SET_PROCEED(state, payload) {
			state.proceed = payload
		}
	},
	actions: {
		// Breaks away from application...
		beginConfirmation({dispatch}, payload) {
			if (payload.type != 'FINISH') {
				var args = payload.args;
				var data = payload.json;
				if (args != {}) {
					data.args = args;
				}
				
				dispatch('startConfirmation', data);
            } else {
				dispatch('finishConfirmation', false);
			}
		},
		startConfirmation({commit}, payload) {
			commit('SET_ACTION', payload.actionText);
			commit('SET_FUNC', payload.func);
			if (payload.args) {
				commit('SET_ARGS', payload.args);
			}
			commit('SET_DISPLAY', true);
		},
		finishConfirmation({commit}, payload) {
			commit('SET_PROCEED', payload);
			commit('SET_DISPLAY', false);
			commit('SET_ACTION', '');
			commit('SET_ARGS', {});
		},
		proceedCheck({state}) {
			return state.proceed;
		}
	},
	getters: { }
};