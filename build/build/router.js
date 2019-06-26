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
				path      : '/blog',
				component : require('../pages/site/BlogComponent.vue').default
			},
			{
				path      : '/cart',
				component : require('../pages/site/CartComponent.vue').default
			},
			{
				path      : '/contact',
				component : require('../pages/site/ContactComponent.vue').default
			},
			{
				path      : '/faq',
				component : require('../pages/site/FaqComponent.vue').default
			},
			{
				path      : '/forum',
				component : require('../pages/site/ForumComponent.vue').default
			},
			{
				path      : '/forum/:board',
				component : require('../pages/site/ForumBoardComponent.vue').default
			},
			{
				path      : '/forum/:board/:topic',
				component : require('../pages/site/ForumTopicComponent.vue').default
			},
			{
				path      : '/gallery',
				component : require('../pages/site/GalleryComponent.vue').default
			},
			{
				path      : '/pricing',
				component : require('../pages/site/PricingComponent.vue').default
			},
			{
				path      : '/purchase',
				component : require('../pages/site/PurchaseComponent.vue').default
			},
			{
				path      : '/shop',
				component : require('../pages/site/ShopComponent.vue').default
			},
			{
				path      : '/clients',
				component : require('../pages/site/ShopComponent.vue').default
			},
			{ 
				path      : '/stylesheet',
				component : require('../pages/StylesheetComponent.vue').default,
			},
			// ALWAYS BOTTOM! It will overwrite other code.
			{
				path      : '/*',
				component : require('../pages/404Component.vue').default,
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
				component : require('../pages/admin/HomeComponent.vue').default
			},
			{ 
				path      : '/stylesheet',
				component : require('../pages/StylesheetComponent.vue').default,
			},
			// ALWAYS BOTTOM! It will overwrite other code.
			{
				path      : '/*',
				component : require('../pages/404Component.vue').default,
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