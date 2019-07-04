import defaultRoutes from './router';
import customRoutes from '../../../../custom/build/router';

// Determine if custom included or not...
// Need to revisit later and build if/then logic...

const routes = customRoutes.concat(defaultRoutes);


export default routes;