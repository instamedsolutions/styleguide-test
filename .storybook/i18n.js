import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translation from '../ui/lang/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation }
    },
    fallbackLng: 'fr',
    debug: false
  });

export default i18n;
