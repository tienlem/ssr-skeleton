/**
 * Asynchronously loads the component for HomePage
 */

import loadable from '@loadable/component';
export const HomePage = loadable(() => import('./index'));
