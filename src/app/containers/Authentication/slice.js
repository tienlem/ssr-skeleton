import { createSlice } from '@reduxjs/toolkit';
import set from 'lodash/fp/set';
import flow from 'lodash/fp/flow';
import { ACTION_STATUS } from 'utils/constants';
export const initialState = {
  isAuthenticated: false,
  status: '',
  error: null,
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login(state) {
      return set('status', ACTION_STATUS.PENDING, state);
    },
    loginSuccess(state) {
      return flow(
        set('isAuthenticated', true),
        set(`status`, ACTION_STATUS.SUCCESS),
      )(state);
    },
    loginFailed(state, action) {
      return flow(
        set('error', action.payload.error),
        set('status', ACTION_STATUS.FAILED),
      )(state);
    },
    logout(state) {
      return flow(
        set('isAuthenticated', false),
        set('status', ''),
        set('error', null),
      )(state);
    },
    logoutRequest(state) {
      return state;
    },
  },
});

export const { actions, reducer, name: sliceKey } = authenticationSlice;
