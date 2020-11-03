import React, { memo } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routes } from './routes';
import PrivateRoute from './PrivateRoute';
import CommonLayout from './CommonLayout';

export const AppLayout = props => (
  <Switch>
    {routes.map(item => (
      <PrivateRoute
        key={item.key}
        exact
        path={item.path}
        component={item.component}
        layout={CommonLayout}
      />
    ))}
    <Redirect to="/home" />
  </Switch>
);

AppLayout.propTypes = {
  location: PropTypes.object,
};

export default memo(AppLayout);
