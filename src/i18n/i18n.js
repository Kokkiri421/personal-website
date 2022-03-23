import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import TRANSLATION_EN from './en/translation.json';
import TRANSLATION_RU from './ru/translation.json';

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['navigator', 'localStorage'],
      cache: ['localStorage'],
    },
    resources: {
      en: {
        translation: TRANSLATION_EN,
      },
      ru: {
        translation: TRANSLATION_RU,
      },
    },
  });

i18n.languages = ['en', 'ru'];

export default i18n;
