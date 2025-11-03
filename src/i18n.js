import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation }
    },
    lng: 'en', // Принудительно устанавливаем английский
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      // Отключаем автоопределение языка браузера
      convertDetectedLanguage: (lng) => 'en'
    }
  });

console.log('i18n initialized:', i18n);
console.log('Available languages:', i18n.languages);

export default i18n;