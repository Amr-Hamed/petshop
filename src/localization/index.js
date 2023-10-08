import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import EN from './EN';
import AR from './AR';
import {LANGUAGES} from '../utils/globalVariables';

const initLang = () => {
  i18n.use(initReactI18next).init({
    resources: {
      EN: {
        translation: EN,
      },
      AR: {
        translation: AR,
      },
    },
    lng: LANGUAGES.EN,
    fallbackLng: LANGUAGES.EN,
    interpolation: {
      escapeValue: false,
    },
  });
};

const changeLanguage = langKey => i18n.changeLanguage(langKey);

export {initLang, changeLanguage};
