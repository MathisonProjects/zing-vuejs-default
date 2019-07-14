export default {
	state: {
		default : true,
		blogs   : []
	},
	mutations: {
		SET_BLOGS(state, payload) {
			state.blogs = payload;
		}
	},
	actions: {
		getBlogs({commit,state,dispatch}) {
			if (state.default) {
				commit('SET_BLOGS', [
					{ 'title' : 'Default Blog 1', 'long' : 'This is longer text', 'short' : 'Short text', 'tag' : 'Tag1 Tag2'},
					{ 'title' : 'Default Blog 2', 'long' : 'This is longer text', 'short' : 'Short text', 'tag' : 'Tag1 Tag2'},
					{ 'title' : 'Default Blog 3', 'long' : 'This is longer text', 'short' : 'Short text', 'tag' : 'Tag1 Tag2'},
					{ 'title' : 'Default Blog 4', 'long' : 'This is longer text', 'short' : 'Short text', 'tag' : 'Tag1 Tag2'},
					{ 'title' : 'Default Blog 5', 'long' : 'This is longer text', 'short' : 'Short text', 'tag' : 'Tag1 Tag2'}
				]);
			} else {
				var data = {
					db        : '',
					tableName : 'blog'
				};
				axios.post('https://data.zing.land/api/v2/data/table/get', data).then(response => {
					commit('SET_BLOGS', response.data);
				});
			}
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