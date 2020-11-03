/**
 * Asynchronously loads the component for Authentication
 */

import loadable from '@loadable/component';
export const Login = loadable(() => import('./index'));
