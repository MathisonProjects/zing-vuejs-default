import Vuex from 'vuex';
import modules from './modules';
import CustomSite from '../../../custom';
import createPersistedState from 'vuex-persistedstate';
const Vue = require('vue');
Vue.use(Vuex);


const fullModules = Object.assign({}, modules, CustomSite.CustomStore);

export const store = new Vuex.Store({
    modules : fullModules,
	plugins: [ createPersistedState() ]
})