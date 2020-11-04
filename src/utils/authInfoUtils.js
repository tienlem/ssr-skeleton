import get from 'lodash/fp';
import isEmpty from 'lodash/fp';
import isNil from 'lodash/fp';

import Localstorage from 'utils/localStorage';
import AuthInfo from 'models/AuthInfo';

export const AUTH_INFO = 'AuthenticationInfo';
export const ACCOUNT_ID = 'AccountId';

class AuthInfoUtils {
  /**
   * store AuthInfo to cookie.
   */
  storeAuthInfo(authInfo: AuthInfo, accountId: string): void {
    this.removeAuthInfo();
    if (!isNil(authInfo)) {
      Localstorage.setItem(AUTH_INFO, JSON.stringify(authInfo));
    }
    if (accountId) {
      Localstorage.setItem(ACCOUNT_ID, accountId);
    }
  }

  /**
   * get authInfo from cookie.
   */
  /* eslint-disable no-underscore-dangle */
  _getAuthInfo(): AuthInfo {
    try {
      const jsonData = JSON.parse(Localstorage.getItem(AUTH_INFO));
      return !isEmpty(jsonData) ? new AuthInfo(jsonData) : null;
    } catch (err) {
      return null;
    }
  }

  _getAccountId(): string {
    try {
      const accountId = Localstorage.getItem(ACCOUNT_ID);
      return !isEmpty(accountId) ? accountId : null;
    } catch (err) {
      return null;
    }
  }

  /**
   * get authInfo from cookie and validation before returning object. if error -> user need to re-authenticate.
   */
  getAuthInfo(): AuthInfo {
    try {
      const authInfo = this._getAuthInfo();
      // const accountId = this._getAccountId();
      if (!isNil(authInfo)) {
        return { ...authInfo };
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  /**
   * get accessToken from authInfo in cookie
   */
  getAccessToken(): String {
    const authInfo = this.getAuthInfo();
    return get('accessToken')(authInfo);
  }

  getAccountId(): String {
    const authInfo = this.getAuthInfo();
    return get('accountId')(authInfo);
  }

  /**
   * check if user is authenticated or not.
   */
  isAuthenticated(): Boolean {
    const authInfo = this._getAuthInfo();
    return !isNil(authInfo) ? authInfo.isValid() : false;
  }

  /**
   * remove authInfo from cookie.
   */
  removeAuthInfo(): void {
    Localstorage.removeItem(AUTH_INFO);
    Localstorage.removeItem(ACCOUNT_ID);
  }
}
const singleton = new AuthInfoUtils();
export default singleton;
