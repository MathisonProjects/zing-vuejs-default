module.exports = {
	namespaced: true,
	state: {
		isLoaded    : true,
		cart        : []
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
		addToCart({commit, state}, payload) {
			var cart = state.cart;
			cart.push(payload);
			commit('SET_CART', cart);
		},
		removeFromCart({commit}, payload) {
			var cart = state.cart;
			
			commit('SET_CART', cart);
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