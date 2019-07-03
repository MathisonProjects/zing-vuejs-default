import defaultRoutes from './router';
import customRoutes from '../../../../custom/build/router';

// Determine if custom included or not...
// Need to revisit later and build if/then logic...

customRoutes[0].component = require('../../layouts/SiteTemplateComponent.vue').default;

const routes = defaultRoutes.concat(customRoutes);


export default routes;