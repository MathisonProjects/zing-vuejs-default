import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import routes from './routers'

export default new VueRouter({
	//mode: 'history', // Something going on with apache or htaccess....
	routes: routes // short for `routes: routes`
});