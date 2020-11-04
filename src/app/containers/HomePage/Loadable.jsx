/**
 * Asynchronously loads the component for HomePage
 */

import loadable from '@loadable/component';
import { loadData } from './index';

const HomePage = loadable(() => import('./index'));

export default HomePage;
export { loadData };
