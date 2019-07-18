import JsonStore from '@/json';
import CustomSite from '@custom';

var fullJson = {};
if (CustomSite.CustomJson) {
	fullJson = Object.assign({}, JsonStore, CustomSite.CustomJson);
} else {
	fullJson = JsonStore;
}

export default {
	state: fullJson,
	mutations: {
		DO_RESET(state, payload) {
			state = payload;
		},
		SET_STATE_ITEM(state, payload) {
			state[payload.item] = payload.store;
		}
	},
	actions: {
		reset({commit}) {
			for (var i in fullJson) {
				var data = {
					item : i,
					store: fullJson[i]
				}
				commit('SET_STATE_ITEM', data);
			}
		}
	}
}