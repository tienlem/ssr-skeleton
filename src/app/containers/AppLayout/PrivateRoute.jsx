import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from 'utils/localStorageUtils';

export const PrivateRoute = ({ component, layout: Layout, ...rest }) => {
  const renderFn = Component => props => {
    if (!!Component && isAuthenticated()) {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    } else {
      return <Redirect to="/login" />;
    }
  };
  return <Route {...rest} render={renderFn(component)} />;
};

export default PrivateRoute;
