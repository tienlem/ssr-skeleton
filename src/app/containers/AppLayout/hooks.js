import { useCallback } from 'react';
import useActions from 'hooks/useActions';
import { actions } from 'app/containers/LanguageProvider/slice';
import i18n from 'locales/i18n';

export const useHooks = () => {
  const { changeLocaleAction } = useActions({
    changeLocaleAction: actions.changeLocale,
  });

  const changeLocale = useCallback(
    lng => {
      i18n.changeLanguage(lng);
      changeLocaleAction({ languageCode: lng });
    },
    [changeLocaleAction],
  );

  return {
    handlers: {
      changeLocale,
    },
  };
};
export default useHooks;
