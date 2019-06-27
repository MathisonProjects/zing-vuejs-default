import Vuex from 'vuex'
import modules from './modules'
import createPersistedState from 'vuex-persistedstate';
const Vue = require('vue');
Vue.use(Vuex);


export const store = new Vuex.Store({
    modules : modules,
	plugins: [ createPersistedState() ]
})