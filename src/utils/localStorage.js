const LocalStorageServices = {
  isBrowser() {
    if (typeof window !== 'undefined' && window?.localStorage) {
      return true;
    } else {
      return false;
    }
  },

  setItem(key, value) {
    if (this.isBrowser()) localStorage.setItem(key, value);
  },

  getItem(key) {
    if (!this.isBrowser()) return;
    return localStorage.getItem(key);
  },

  getItemJson(key) {
    if (!this.isBrowser()) return;
    return JSON.parse(localStorage.getItem(key));
  },

  setItemJson(key, value) {
    if (this.isBrowser()) localStorage.setItem(key, JSON.stringify(value));
  },

  removeItem(key) {
    if (this.isBrowser()) localStorage.removeItem(key);
  },
  removeAll() {
    if (this.isBrowser()) localStorage.clear();
  },
};

export default LocalStorageServices;
