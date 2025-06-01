document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-i18n]");
  const langButtons = document.querySelectorAll(".lang-btn");

  function setLanguage(lang) {
    fetch("js/lang.json")
      .then(res => res.json())
      .then(data => {
        elements.forEach(el => {
          const key = el.getAttribute("data-i18n");
          if (data[lang] && data[lang][key]) {
            el.innerHTML = data[lang][key];
          }
        });
        localStorage.setItem("language", lang);
      });
  }

  const savedLang = localStorage.getItem("language") || "tr";
  setLanguage(savedLang);

  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
});