/**
 * Dashboard details selectors
 */

import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

const selectAuthenticationState = state => state.authentication;

const getIsAuthenticated = createSelector(selectAuthenticationState, state =>
  get('isAuthenticated', state),
);

export { getIsAuthenticated };
