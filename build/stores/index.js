import Vuex from 'vuex'
import modules from './modules'
const Vue = require('vue');
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules : modules
})