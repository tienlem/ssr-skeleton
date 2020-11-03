import { useCallback, useEffect } from 'react';
import useActions from 'hooks/useActions';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { actions } from './slice';
import { getIsAuthenticated } from './selectors';

export const useHooks = () => {
  const history = useHistory();
  const { login } = useActions({ login: actions.login });
  const isAuthenticated = useSelector(getIsAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated, history]);

  const onFinish = useCallback(
    values => {
      login(values);
    },
    [login],
  );

  const onFinishFailed = useCallback(errorInfo => {
    console.log('Failed:', errorInfo);
  }, []);

  return {
    handlers: {
      onFinish,
      onFinishFailed,
    },
  };
};

export const useLogout = () => {
  const { logoutRequest } = useActions({
    logoutRequest: actions.logoutRequest,
  });
  const isAuthenticated = useSelector(getIsAuthenticated);
  const history = useHistory();
  const { pathname } = useLocation();
  useEffect(() => {
    if (!pathname.includes('/dang-nhap') && !isAuthenticated) {
      history.push('/dang-nhap');
    }
  }, [isAuthenticated, history, pathname]);
  const onLogout = useCallback(() => {
    logoutRequest();
  }, [logoutRequest]);

  return {
    handlers: {
      onLogout,
    },
  };
};

export default useHooks;
