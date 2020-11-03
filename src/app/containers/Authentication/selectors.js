/**
 * Dashboard details selectors
 */

import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

const selectAuthenticationState = state => state.authentication;

const makeSelectIsAuthenticated = createSelector(
  selectAuthenticationState,
  state => get('isAuthenticated', state),
);

export { makeSelectIsAuthenticated };
