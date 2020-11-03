const AUTH_INFO_KEY = 'AuthenticationInfo';
const I18NEXT_LANGUAGE_KEY = 'i18nextLng';

export const LocalStorage = {
  isBrowser() {
    if (typeof window !== 'undefined' && window?.localStorage) {
      return true;
    } else {
      return false;
    }
  },
  set(key, value) {
    if (localStorage.isBrowser()) {
      window.localStorage.setItem(key, value);
    }
  },
  get(key) {
    if (localStorage.isBrowser()) {
      return window.localStorage.getItem(key);
    }
  },
};

export const storeAuthInfo = authInfo =>
  localStorage.setItem(AUTH_INFO_KEY, JSON.stringify(authInfo));

export const isAuthenticated = () => {
  const authInfo = JSON.parse(localStorage.getItem(AUTH_INFO_KEY));
  if (authInfo && authInfo.access_token) {
    return true;
  }

  return false;
};

export const getCurrentLanguageCode = () => {
  if (typeof window !== 'undefined' && window?.cookie) {
    return window.cookie.getItem(I18NEXT_LANGUAGE_KEY);
  }
};

export const removeAuthInfo = () => localStorage.removeItem(AUTH_INFO_KEY);
