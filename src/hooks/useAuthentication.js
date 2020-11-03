import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isAuthenticated } from 'utils/localStorageUtils';

export const useAuthentication = () => {
  const history = useHistory();
  useEffect(() => {
    if (!isAuthenticated()) {
      history.push('/dang-nhap');
    }
  }, []);
};

export default useAuthentication;
