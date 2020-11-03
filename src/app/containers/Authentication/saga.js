// @flow
import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import { fakeAPi } from 'fetchers/AuthFetcher';
import { storeAuthInfo, removeAuthInfo } from 'utils/localStorageUtils';
import { actions } from './slice';
/**
 * Login
 */
export function* loginWatcher() {
  yield takeLatest(actions.login, loginTask);
}

export function* loginTask(action) {
  const { response, error } = yield call(loginAPI, action.payload);
  if (response) {
    const authInfo = {
      access_token: response,
      userName: action.payload.userName,
    };
    yield call(storeAuthInfo, authInfo);
    yield put(actions.loginSuccess());
  } else {
    yield put(actions.loginFailed(error));
  }
}

export function loginAPI() {
  const fakeResponse = {
    response: 'access_token',
  };

  return fakeAPi(fakeResponse, 1000);
  // return login(payload);
}

export function* logoutWatcher() {
  yield takeLatest(actions.logoutRequest, logoutTask);
}

export function* logoutTask() {
  yield call(removeAuthInfo);
  yield put(actions.logout());
}

export default function* defaultSaga() {
  yield all([fork(loginWatcher), fork(logoutWatcher)]);
}
