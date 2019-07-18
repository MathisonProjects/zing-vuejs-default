export default  {
	state: {
		isLoaded: false,
		default : true ,
		forum   : {}
	},
	mutations: {
		DO_RESET(state, payload) {
			state = payload;
		},
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
				var defaultForum = require('../../json/forum_default.json');
				commit('SET_FORUM', defaultForum);
				dispatch('setLoaded');
			} else {
				dispatch('reloadForum');
			}
		},
		createArea() {},
		createBoard() {},
		createTopic() {},
		createPost() {},
		updateArea() {},
		updateBoard() {},
		updateTopic() {},
		updatePost() {},
		deleteArea() {},
		deleteBoard() {},
		deleteTopic() {},
		deletePost() {},
		reloadForum({commit}) {
			commit('setUnloaded');
			console.log('Create a forum loading source...');
			commit('setLoaded');
		},
		setLoaded({commit}) {
			commit('SET_LOADED', true);
		},
		setUnloaded({commit}) {
			commit('SET_LOADED', false);
		}
	}
};