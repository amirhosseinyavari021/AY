let currentLang = 'en';  // Default language

// Change website language
function switchLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = lang === 'en' ? translations.en[key] : translations.fa[key];
    });
}

// Change theme mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Translations for different languages
const translations = {
    en: {
        "about": "About Me",
        "blog": "Blog",
        "contact": "Contact Me",
        "intro-programming": "Introduction to Programming",
        "intro-networking": "Introduction to Networking",
        "read-more": "Read more",
    },
    fa: {
        "about": "درباره من",
        "blog": "وبلاگ",
        "contact": "تماس با من",
        "intro-programming": "مقدمه‌ای بر برنامه نویسی",
        "intro-networking": "مقدمه‌ای بر شبکه",
        "read-more": "ادامه مطلب",
    }
};

// Set initial language
switchLanguage('en');
