export default {
	state: {
		isLoaded: false,
		blogs: []
	},
	mutations: {
		SET_LOADED(state, payload) {
			state.isLoaded = payload;
		},
		SET_BLOGS(state, payload) {
			state.Blogs = payload;
		}
	},
	actions: {
		getBlogs({commit,dispatch}) {
			axios.defaults.baseURL = 'https://' + window.location.hostname;
			axios.post('/api/v1/services/getBlogs').then(response => {
				commit('SET_BLOGS', response.data);
				dispatch('isLoaded');
			});
		},
		addBlog({commit,dispatch}, payload) {
			dispatch('notLoaded');
			axios.defaults.baseURL = 'https://' + window.location.hostname;
			axios.post('/api/v1/services/createBlog',payload).then(response => {
				commit('SET_BLOGS', response.data);
				dispatch('getBlogs');
			});
		},
		isLoaded({commit}) {
			commit('SET_LOADED', true);
		},
		notLoaded({commit}) {
			commit('SET_LOADED', false);
		}
	}
};