(function() {
  i18next
    .use(i18nextHttpBackend)
    .use(i18nextBrowserLanguageDetector)
    .init({
      debug: false,
      fallbackLng: 'tr',
      backend: { loadPath: 'locales/{{lng}}.json' }
    }, function(err, t) {
      updateContent();
    });

  function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.innerHTML = i18next.t(key);
    });
  }

  i18next.on('languageChanged', () => updateContent());
  const btnTr = document.getElementById('btn-tr');
  const btnEn = document.getElementById('btn-en');
  if (btnTr) btnTr.addEventListener('click', () => i18next.changeLanguage('tr'));
  if (btnEn) btnEn.addEventListener('click', () => i18next.changeLanguage('en'));
})();
