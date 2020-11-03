import { createSlice } from '@reduxjs/toolkit';
import set from 'lodash/fp/set';
import { getCurrentLanguageCode } from 'utils/localStorageUtils';
export const initialState = {
  languageCode: getCurrentLanguageCode(),
};

const languageProviderSlice = createSlice({
  name: 'languageProvider',
  initialState,
  reducers: {
    changeLocale(state, action) {
      return set('languageCode', action.payload.languageCode, state);
    },
  },
});

export const { actions, reducer, name: sliceKey } = languageProviderSlice;
