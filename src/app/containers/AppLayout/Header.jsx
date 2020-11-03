/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';
import Popover from 'app/components/Popover';
import { useTranslation } from 'react-i18next';
import { useInjectSaga } from 'utils/redux-injectors';
import { useLogout } from 'app/containers/Authentication/hooks';
import sagaAuthentication from 'app/containers/Authentication/saga';
import { sliceKey } from 'app/containers/Authentication/slice';
import { StyledHeader } from './styles';
import useHooks from './hooks';

export const Header = () => {
  useInjectSaga({ key: sliceKey, saga: sagaAuthentication });
  const { handlers } = useLogout();
  const {
    handlers: { changeLocale },
  } = useHooks();
  const { t } = useTranslation();

  const { onLogout } = handlers;

  return (
    <StyledHeader>
      <span>This is header!</span>
      <div className="menu-wrapper">
        <div className="avatar">
          <button onClick={() => changeLocale('vi')}>vi</button>
          <button onClick={() => changeLocale('en')}>en</button>
          <Popover
            content={<a onClick={onLogout}>{t('Authentication.logout')}</a>}
            trigger="click"
            placement="bottomLeft"
          >
            <button>Menu</button>
          </Popover>
        </div>
      </div>
    </StyledHeader>
  );
};

export default memo(Header);
