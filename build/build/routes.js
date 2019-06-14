// Establish Routes

const routes = [
	{
		// Site
		path      : '/',
		name      : 'Home',
		component : require('../layouts/SiteTemplateComponent.vue').default,
		props     : true,
		children  : [
			{
				path      : '/',
				component : require('../pages/site/HomeComponent.vue').default
			},
			{
				path      : '/about',
				component : require('../pages/site/AboutComponent.vue').default
			},
			{
				path      : '/contact',
				component : require('../pages/site/ContactComponent.vue').default
			},
			{ 
				path      : '/stylesheet',
				component : require('../pages/StylesheetComponent.vue').default,
			}
		]
	},
	{
		// Admin
		path      : '/admin',
		name      : 'Admin',
		component : require('../layouts/AdminTemplateComponent.vue').default,
		props     : true,
		children  : [
			{
				path      : '/',
				component : require('../pages/admin/Home.vue').default
			},
			{ 
				path      : '/stylesheet',
				component : require('../pages/StylesheetComponent.vue').default,
			},
			// ALWAYS BOTTOM! It will overwrite other code.
			{
				path      : '/*',
				component : require('../pages/ErrorComponent.vue').default,
			}
		]
	}
]

// Export Routes
module.exports = function(VueRouter) {
	return new VueRouter({
		//mode: 'history', // Something going on with apache or htaccess....
		routes // short for `routes: routes`
	});
}