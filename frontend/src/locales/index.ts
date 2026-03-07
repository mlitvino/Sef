import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from './en';
import fi from './fi';

export const resources = {
  en,
  fi,
};

export type Language = keyof typeof resources;

function initLanguage() {
  const locLang = Localization.getLocales()[0]?.languageCode;

  if (locLang && Object.prototype.hasOwnProperty.call(resources, locLang)) {
    return locLang as LanguageName;
  }

  return 'en';
}

const i18n = createInstance();

void i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((err) => console.warn('Error: i18n init failed:', err));

export default i18n;
