const AUTH_INFO_KEY = 'AuthenticationInfo';
// const I18NEXT_LANGUAGE_KEY = 'i18nextLng';

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
  return 'en';
};

export const removeAuthInfo = () => localStorage.removeItem(AUTH_INFO_KEY);
