/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { reducer as authenticationReducer } from 'app/containers/Authentication/slice';
import { reducer as languageProviderReducer } from 'app/containers/LanguageProvider/slice';
// import homePageReducer from 'app/containers/HomePage/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers = {}) {
  return combineReducers({
    authentication: authenticationReducer,
    locale: languageProviderReducer,
    // homePage: homePageReducer,
    ...injectedReducers,
  });
}
