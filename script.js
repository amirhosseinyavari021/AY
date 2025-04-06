// Language toggle functionality
const languageToggle = document.getElementById('language-toggle');
languageToggle.addEventListener('click', () => {
    document.body.classList.toggle('lang-en');
    document.body.classList.toggle('lang-fa');
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
