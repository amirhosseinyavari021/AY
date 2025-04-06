// Language toggle
const languageToggle = document.getElementById('language-toggle');
languageToggle.addEventListener('click', () => {
    const langEn = document.querySelectorAll('.lang-en');
    const langFa = document.querySelectorAll('.lang-fa');

    langEn.forEach(element => {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    });

    langFa.forEach(element => {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    });
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
