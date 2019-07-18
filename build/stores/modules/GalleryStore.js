export default {
	state: {
		default    : true,
		categories : [],
		albums     : []
	},
	mutations: {
		DO_RESET(state, payload) {
			state = payload;
		},
		SET_CATEGORIES(state, payload) {
			state.categories = payload;
		},
		SET_ALBUMS(state, payload) {
			state.albums = payload;
		}
	},
	actions: {
		loadGallery({commit, state}) {
			if (state.default == true) {
				var categories = require('../../json/categoriesGallery.example.json');
				var albums     = require('../../json/albumsGallery.example.json');
				commit('SET_CATEGORIES', categories);
				commit('SET_ALBUMS'    , albums);
			} else {
				console.log('Code is needed for a non-default gallery');
			}
		}
	},
	getters: {
		isLoaded: state => {
			if (state.albums.length > 0) {
				return true;
			} else {
				return false;
			}
		},
		gallery: state => {
			return {
				categories: state.categories,
				albums    : state.albums
			}
		}
	}
}