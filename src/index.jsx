/* eslint-disable no-underscore-dangle */
// Startup point for client-side application
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import 'sanitize.css/sanitize.css';
import 'antd/dist/antd.css';
import 'styles/icon-moon.css';
import { isAuthenticated } from 'utils/localStorageUtils';
import Routes from './app/Routes';
import { configureAppStore } from './store/configureStore';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const initialState = {
  authentication: {
    isAuthenticated: isAuthenticated(),
  },
};
const MOUNT_NODE = document.querySelector('#root');

const store = configureAppStore({ ...state, ...initialState });

const ConnectedApp = () => (
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>
);

const render = () => {
  loadableReady(() => {
    ReactDOM.hydrate(<ConnectedApp />, MOUNT_NODE);
  });
};

if (module.hot) {
  // Hot reloadable translation json files and app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./locales/i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
