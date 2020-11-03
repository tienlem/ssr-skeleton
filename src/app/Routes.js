import { HomePage } from 'app/containers/HomePage/Loadable';
import { Login } from 'app/containers/Authentication/Loadable';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        component: HomePage,
        path: '/',
        exact: true,
      },
      {
        component: Login,
        path: '/login',
      },
    ],
  },
];
