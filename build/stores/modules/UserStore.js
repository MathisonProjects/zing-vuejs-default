export default {
	namespaced: true,
	state: {
		isLoaded: false,
		user    : '',
		data    : {
			stripe: null
		},
		token   : ''
	},
	mutations: {
		SET_USER(state, payload) {
			state.user = payload;
		},
		SET_TOKEN(state, payload) {
			state.token = payload;
		},
		SET_LOAD(state, payload) {
			state.isLoaded = payload;
		},
		SET_DATA(state, payload) {
			state.data[payload.type] = payload.data;
		}
	},
	actions: {
		setUser({commit, dispatch}, payload) {
			if (payload != null && payload != 'null') {
				commit('SET_TOKEN', payload);
				dispatch('GetUser');
			} else {
				commit('SET_LOAD', true);
			}
		},
		GetUser({commit,dispatch,state}) {
			axios.defaults.baseURL = 'https://profiles.zing.land';
			config = {
				headers: { 'Authorization' : 'Bearer '+ state.token }
			};
			params = { };

			axios.get('/api/v1/user', config).then(response => {
               	commit('SET_USER', response.data);
               	dispatch('GetStripeData');
               	commit('SET_LOAD', true);
            });
		},
		LoginUser({commit,dispatch}, payload) {
			axios.defaults.baseURL = 'https://profiles.zing.land';
			return axios.post('/api/v1/login', payload).then(response => {
               	if (response.data.token) {
		    		sessionStorage['user_session'] = response.data.token;

               		dispatch('setUser', response.data.token);
	               	return 'success';
               	} else {
               		return 'fail';
               	}
            }).catch(error => {
			    console.log(error.response)
			});
		},
		RegisterUser({commit,dispatch}, payload) {
			axios.defaults.baseURL = 'https://profiles.zing.land';
			axios.post('/api/v1/register', payload).then(response => {
				commit('SET_TOKEN', response.data.token);
				dispatch('GetUser');
			});
		},
		GetStripeData({commit, state}) {
			axios.defaults.baseURL = 'https://' + window.location.hostname;
			axios.post('/api/v1/external/getStripeUser', { email : state.user.email}).then(response => {
				commit('SET_DATA', {
					type: 'stripe',
					data: response.data
				});
			});
		},
		logout({commit}) {
			commit('SET_LOAD', false);
		    sessionStorage['user_session'] = null;
			commit('SET_USER', '');
			commit('SET_DATA', { stripe : null });
			commit('SET_TOKEN', '');
			commit('SET_LOAD', true);
		}
	},
	getters: {
		user    : state => {
			return state.user
		},
		loggedIn : state => {
			if (state.user == '') {
				return false;
			} else {
				return true;
			}
		},
		isLoaded: state => {
			return state.isLoaded
		}
	}
};