export default {
	state: {
		cart        : []
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
		removeFromCart({commit}, payload) {
			var cart = state.cart;
			commit('SET_CART', cart);
		},
		updateItem({commit, state, dispatch}, payload) {
			var cart = state.cart;
			commit('SET_CART', cart);
		},
		resetCart({commit}) {
			commit('SET_CART', []);
		}
	},
	getters: {
		cartList : state => {
			const itemizedCart = [];
			var cart = state.cart;
			var counter = 0;
			for (var i in cart) {
				var item = cart[i];
				if (!itemizedCart[item.item.sku]) {
					itemizedCart[item.item.sku] = {
						count : 1,
						item  : item
					}
				} else {
					itemizedCart[item.item.sku].count++;
				}
				counter++;
				if (counter == cart.length) {
				}
			}
			return itemizedCart;
		},
		isLoaded : state => {
			if (state.cart.length > 0) {
				return true;
			} else {
				return false;
			}
		}
	}
};