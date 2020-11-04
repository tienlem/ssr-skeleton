import React from 'react';
import HomePage, {
  loadData as loadDataHomePage,
} from 'app/containers/HomePage/Loadable';
import Login from 'app/containers/Authentication/Loadable';
import CommonLayout from 'app/containers/AppLayout/CommonLayout';
import App from './App';

export default [
  {
    ...App,
    routes: [
      {
        component: props => (
          <CommonLayout>
            <HomePage {...props} />
          </CommonLayout>
        ),
        path: '/',
        exact: true,
        loadData: loadDataHomePage,
      },
      {
        component: props => (
          <CommonLayout>
            <Login {...props} />
          </CommonLayout>
        ),
        path: '/dang-nhap',
      },
      {
        component: Login,
        path: '/danh-muc-san-pham',
      },
    ],
  },
];
