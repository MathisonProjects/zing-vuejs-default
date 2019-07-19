/*
forumArea
forumBoards
forumBoardTopics
forumTopicPost
forumUserFooter
*/
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
		createArea({commit, dispatch}, payload) {
			var data = { tableName : 'forumArea'       , input : payload };
			dispatch('fireForumInsert', data);
		},
		createBoard({commit, dispatch}, payload) {
			var data = { tableName : 'forumBoards'     , input : payload };
			dispatch('fireForumInsert', data);
		},
		createTopic({commit, dispatch}, payload) {
			var data = { tableName : 'forumBoardTopics', input : payload };
			dispatch('fireForumInsert', data);
		},
		createPost({commit, dispatch}, payload) {
			var data = { tableName : 'forumTopicPost'  , input : payload };
			dispatch('fireForumInsert', data);
		},
		updateArea() {},
		updateBoard() {},
		updateTopic() {},
		updatePost() {},
		deleteArea() {},
		deleteBoard() {},
		deleteTopic() {},
		deletePost() {},
		fireForumInsert({dispatch}, payload) {
			var data = {
				db        : zingDb           ,
				tableName : payload.tableName,
				input     : payload.input
			};
			axios.post('https://data.zing.land/api/v2/data/table/insert', data).then(response => {
				dispatch('reloadForum');
			});
		},
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