export default {
	state: {
		cart : []
	},
	mutations: {
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
		removeFromCart({commit, state}, payload) {
			var cart = state.cart;
			cart.splice(payload, 1);
			commit('SET_CART', cart);
		},
		updateItem({commit, state, dispatch}, payload) {
			var cart = state.cart;
			commit('SET_CART', cart);
		},
		resetCart({commit, state}) {
			var cart = state.cart;
			cart.splice(0, cart.length);
			commit('SET_CART', cart);
		}
	},
	getters: {
		isLoaded : state => {
			if (state.cart.length > 0) {
				return true;
			} else {
				return false;
			}
		},
		grandTotal : state => {
			var cost = 0;
			for (var i in state.cart) {
				cost += state.cart[i].item.price;
			}

			return cost;
		}
	}
};