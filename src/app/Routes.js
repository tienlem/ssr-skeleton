import HomePage from 'app/containers/HomePage/Loadable';
import { Login } from 'app/containers/Authentication/Loadable';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        component: Login,
        path: '/dang-nhap',
      },
      {
        component: Login,
        path: '/danh-muc-san-pham',
      },
    ],
  },
];
