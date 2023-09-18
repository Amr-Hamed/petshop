import en from './EN';
import ar from './AR';
import {I18n} from 'i18n-js';
import {LANGUAGES} from '../utils/globalVariables';

let Locale = {};

Locale.i18n = new I18n({
  [LANGUAGES.EN]: en,
  [LANGUAGES.AR]: ar,
});

Locale.i18n.enableFallback = true;
const currentLanguage =
  // TODO: implement asyncstorage retrieve language key
  // lang ??
  LANGUAGES.EN;

Locale.i18n.defaultLocale = currentLanguage;
Locale.i18n.locale = currentLanguage;
Locale.t = (key, props) => Locale?.i18n?.t(key, props);

Locale.setLanguage = async lang => {
  Locale.i18n.locale = lang;
  Locale.isRTL = lang === LANGUAGES.AR;
  Locale.language = lang;
};

export default Locale;
