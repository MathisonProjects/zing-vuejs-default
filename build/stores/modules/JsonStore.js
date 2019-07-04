import JsonStore from '../../json';
import CustomSite from '../../../../custom';

const fullJson = Object.assign({}, JsonStore, CustomSite.CustomJson);

export default {
	state: fullJson,
	mutations: {
		SET_STATE_ITEM(state, payload) {
			state[payload.item] = payload.store;
		}
	},
	actions: {
		reset({commit}) {
			for (var i in JsonStore) {
				var data = {
					item : i,
					store: JsonStore[i]
				}
				commit('SET_STATE_ITEM', data);
			}
		}
	}
}