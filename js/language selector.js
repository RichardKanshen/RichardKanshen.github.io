const translations = {
    en: {
        title: 'Richard Kanshen',
    },
    jp: {
        title: 'リチャード・カンシェン',
    },
    ru: {
        title: 'Рихард Каншен'
    }
};

const userLang = navigator.language || navigator.userLanguage;
const currentTranslations = translations[userLang] || translations.en;
function changestrings() {
    document.getElementById('website-title').textContent = currentTranslations.title;
}

const selector = document.getElementById("language-selector");
selector.addEventListener("change", updateLanguage);
function updateLanguage() {
  const newLanguage = selector.value;
  const currentTranslations = translations[newLanguage] || translations.en;
  changestrings()
}
