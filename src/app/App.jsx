import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import ErrorBoundary from 'app/components/ErrorBoundary';
import CommonLayout from 'app/containers/AppLayout/CommonLayout';
import { GlobalStyle } from 'styles/global-styles';

const App = ({ route }) => {
  return (
    <>
      <Helmet key={Math.random()}>
        <title>Pharmacity</title>
        <meta property="og:title" content="Pharmacity" />
        <meta name="description" content="Pharmacity" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pharmacity.com" />
      </Helmet>
      <ErrorBoundary>{renderRoutes(route.routes)}</ErrorBoundary>
      <GlobalStyle />
    </>
  );
};

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
  route: null,
};

export default {
  component: App,
};
