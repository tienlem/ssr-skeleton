/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { actions } from 'app/containers/Authentication/slice';

export function HomePage() {
  const { t } = useTranslation();

  // return (
  //   <>
  //     <Trans i18nKey="i18nFeature.title"></Trans>
  //   </>
  // );
  return <>{t('HomePage.welcome')}</>;
}

const loadData = store => {
  // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
  // So we need to use store itself to load data
  return store.dispatch(actions.loginSuccess()); // Manually dispatch a network request
};

export default memo(HomePage);
