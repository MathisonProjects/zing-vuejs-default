export default {
	state: {
		blogs: []
	},
	mutations: {
		SET_BLOGS(state, payload) {
			state.blogs = payload;
		}
	},
	actions: {
		getBlogs({commit,dispatch}) {
			var data = {
				db        : '',
				tableName : 'blog'
			};
			axios.post('https://data.zing.land/api/v2/data/table/get', data).then(response => {
				commit('SET_BLOGS', response.data);
			});
		},
		addBlog({commit,dispatch}, payload) {
			var data = {
				db        : '',
				tableName : 'blog',
				input     : payload
			};

			axios.post('https://data.zing.land/api/v2/data/insert', data).then(response => {
				dispatch('getBlogs');
			});
		}
	},
	getters: {
		isLoaded : state => {
			return state.blogs.length > 0;
		}
	}
};