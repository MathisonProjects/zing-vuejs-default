export default {
	state: {
		blogs: []
	},
	mutations: {
		SET_BLOGS(state, payload) {
			state.Blogs = payload;
		}
	},
	actions: {
		getBlogs({commit,dispatch}) {
			axios.defaults.baseURL = 'https://' + window.location.hostname;
			axios.post('/api/v1/services/getBlogs').then(response => {
				commit('SET_BLOGS', response.data);
			});
		},
		addBlog({commit,dispatch}, payload) {
			axios.defaults.baseURL = 'https://' + window.location.hostname;
			axios.post('/api/v1/services/createBlog',payload).then(response => {
				commit('SET_BLOGS', response.data);
			});
		}
	},
	getters: {
		isLoaded : state => {
			return state.blogs.length > 0;
		}
	}
};