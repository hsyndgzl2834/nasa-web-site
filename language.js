import i18next from 'https://cdn.jsdelivr.net/npm/i18next@21.9.2/dist/esm/i18next.js';
import HttpApi from 'https://cdn.jsdelivr.net/npm/i18next-http-backend@1.4.1/dist/esm/index.js';
import LanguageDetector from 'https://cdn.jsdelivr.net/npm/i18next-browser-languagedetector@6.1.5/dist/esm/index.js';

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'tr',
    debug: false,
    backend: {
      loadPath: '/locales/{{lng}}.json'
    }
  }, (err, t) => {
    if (err) return console.error(err);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.innerText = i18next.t(el.getAttribute('data-i18n'));
    });
  });

window.setLanguage = function(lng) {
  i18next.changeLanguage(lng, () => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.innerText = i18next.t(el.getAttribute('data-i18n'));
    });
  });
};
