/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import toString from 'lodash/fp/toString';

import { getIsAuthenticated } from 'app/containers/Authentication/selectors';
import { actions } from 'app/containers/Authentication/slice';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import SEOMeta from './SeoMeta';
import reducer from './reducer';
import saga from './saga';
import { KEY_STORE as key } from './constants';

export function HomePage() {
  // store register
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { t } = useTranslation();
  const isAuthenticated = useSelector(getIsAuthenticated);
  // return (
  //   <>
  //     <Trans i18nKey="i18nFeature.title"></Trans>
  //   </>
  // );
  return (
    <div>
      <SEOMeta title={toString(isAuthenticated)} />
      {t('HomePage.title')}
      <span className="icon-cheveron-down"></span>
    </div>
  );
}

export const loadData = async (store, req) => {
  // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
  // So we need to use store itself to load data
  // await new Promise((reslove, reject) => {
  //   setTimeout(() => reslove('fetch done'), 3000);
  // });
  return store.dispatch(actions.loginSuccess()); // Manually dispatch a network request
};

export default memo(HomePage);
