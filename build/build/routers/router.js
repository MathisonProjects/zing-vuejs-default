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
				component : require('../../pages/site/HomeComponent.vue').default,
				meta      : { title : 'Zing | Home' }
			},
			{
				path      : 'about',
				name      : 'home-about',
				component : require('../../pages/site/AboutComponent.vue').default,
				meta      : { title : 'Zing | About' }
			},
			{
				path      : 'blog',
				name      : 'home-blog',
				component : require('../../pages/site/BlogComponent.vue').default,
				meta      : { title : 'Zing | Blog' }
			},
			{
				path      : 'cart',
				name      : 'home-cart',
				component : require('../../pages/site/CartComponent.vue').default,
				meta      : { title : 'Zing | Cart' }
			},
			{
				path      : 'contact',
				name      : 'home-contact',
				component : require('../../pages/site/ContactComponent.vue').default,
				meta      : { title : 'Zing | Contact' }
			},
			{
				path      : 'faq',
				name      : 'home-faq',
				component : require('../../pages/site/FaqComponent.vue').default,
				meta      : { title : 'Zing | Faq' }
			},
			{
				path      : 'forum',
				name      : 'home-forum',
				component : require('../../pages/site/ForumComponent.vue').default,
				meta      : { title : 'Zing | Forum' }
			},
			{
				path      : 'forum/:board',
				name      : 'home-board',
				component : require('../../pages/site/ForumBoardComponent.vue').default,
				meta      : { title : 'Zing | Forum Board' }
			},
			{
				path      : 'profiles',
				name      : 'home-profiles',
				component : require('../../pages/site/UserComponent.vue').default,
				meta      : { title : 'Zing | Profiles' }
			},
			{
				path      : 'profiles/:id',
				name      : 'home-profiles-details',
				component : require('../../pages/site/UserComponent.vue').default,
				meta      : { title : 'Zing | Profile Details' }
			},
			{
				path      : 'forum/:board/:topic',
				name      : 'home-forum-board-topic',
				component : require('../../pages/site/ForumTopicComponent.vue').default,
				meta      : { title : 'Zing | Forum Topic' }
			},
			{
				path      : 'gallery',
				name      : 'home-gallery',
				component : require('../../pages/site/GalleryComponent.vue').default,
				meta      : { title : 'Zing | Gallery' }
			},
			{
				path      : 'pricing',
				name      : 'home-pricing',
				component : require('../../pages/site/PricingComponent.vue').default,
				meta      : { title : 'Zing | Pricing' }
			},
			{
				path      : 'purchase',
				name      : 'home-purchase',
				component : require('../../pages/site/PurchaseComponent.vue').default,
				meta      : { title : 'Zing | Purchase' }
			},
			{
				path      : 'shop',
				name      : 'home-shop',
				component : require('../../pages/site/ShopComponent.vue').default,
				meta      : { title : 'Zing | Shop' }
			},
			{
				path      : 'clients',
				name      : 'home-clients',
				component : require('../../pages/site/ClientsComponent.vue').default,
				meta      : { title : 'Zing | Clients' }
			},
			{ 
				path      : 'stylesheet',
				name      : 'home-stylesheet',
				component : require('../../pages/StylesheetComponent.vue').default,
				meta      : { title : 'Zing | Stylesheet' }
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