import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import contentPt from '../data/content.pt.json';
import contentEn from '../data/content.en.json';

const STORAGE_KEY = 'portfolio_language';
const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
const defaultLanguage = savedLanguage || (navigator.language.startsWith('pt') ? 'pt' : 'en');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: contentPt },
      en: { translation: contentEn },
    },
    lng: defaultLanguage,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
  });

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lng);
    document.documentElement.lang = lng === 'pt' ? 'pt-BR' : 'en';
  }
});

export default i18n;
