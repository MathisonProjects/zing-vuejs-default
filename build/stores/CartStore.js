module.exports = {
	namespaced: true,
	state: {
		isLoaded    : true,
		cart        : [
			{
				sku        : 'sku123',
				name       : 'Test Item',
				description: '',
				image      : '',
				quantity   : 1,
				price      : 999
			}
		]
	},
	mutations: {
		SET_LOADED(state, payload) {
			state.display = payload;
		},
		SET_CART(state, payload) {
			this.cart = payload;
		}
	},
	actions: {
		addToCart({commit}, payload) {

		},
		removeFromCart({commit}, payload) {

		},
		updateItem({commit, state}, payload) {

		},
		resetCart({commit}) {
			commit('SET_CART', []);
		},
		cartPrepared({commit}) {
			commit('SET_LOADED', true);
		},
		cartNotPrepared({commit}) {
			commit('SET_LOADED', false);
		}
	}
};