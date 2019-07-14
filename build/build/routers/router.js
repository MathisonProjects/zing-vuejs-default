// Establish Routes
export default [
	{
		// Site
		path      : '/',
		component : require('../../layouts/SiteTemplateComponent.vue').default,
		props     : true,
		children  : [
			{
				path      : '/',
				name      : 'home-home',
				component : require('../../pages/site/HomeComponent.vue').default
			},
			{
				path      : 'about',
				name      : 'home-about',
				component : require('../../pages/site/AboutComponent.vue').default
			},
			{
				path      : 'blog',
				name      : 'home-blog',
				component : require('../../pages/site/BlogComponent.vue').default
			},
			{
				path      : 'cart',
				name      : 'home-cart',
				component : require('../../pages/site/CartComponent.vue').default
			},
			{
				path      : 'contact',
				name      : 'home-contact',
				component : require('../../pages/site/ContactComponent.vue').default
			},
			{
				path      : 'faq',
				name      : 'home-faq',
				component : require('../../pages/site/FaqComponent.vue').default
			},
			{
				path      : 'forum',
				name      : 'home-forum',
				component : require('../../pages/site/ForumComponent.vue').default
			},
			{
				path      : 'forum/:board',
				component : require('../../pages/site/ForumBoardComponent.vue').default
			},
			{
				path      : 'forum/:board/:topic',
				component : require('../../pages/site/ForumTopicComponent.vue').default
			},
			{
				path      : 'gallery',
				name      : 'home-gallery',
				component : require('../../pages/site/GalleryComponent.vue').default
			},
			{
				path      : 'pricing',
				name      : 'home-pricing',
				component : require('../../pages/site/PricingComponent.vue').default
			},
			{
				path      : 'purchase',
				name      : 'home-purchase',
				component : require('../../pages/site/PurchaseComponent.vue').default
			},
			{
				path      : 'shop',
				name      : 'home-shop',
				component : require('../../pages/site/ShopComponent.vue').default
			},
			{
				path      : 'clients',
				name      : 'home-clients',
				component : require('../../pages/site/ClientsComponent.vue').default
			},
			{ 
				path      : 'stylesheet',
				name      : 'home-stylesheet',
				component : require('../../pages/StylesheetComponent.vue').default,
			}
			
		]
	},
	{
		// Admin
		path      : '/admin',
		component : require('../../layouts/AdminTemplateComponent.vue').default,
		props     : true,
		children  : [
			{
				path      : '/',
				name      : 'Admin',
				component : require('../../pages/admin/HomeComponent.vue').default
			},
			{ 
				path      : 'stylesheet',
				component : require('../../pages/StylesheetComponent.vue').default,
			}
		]
	}
]