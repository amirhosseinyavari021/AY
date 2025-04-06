// Toggle theme (day/night mode)
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Toggle language (English/Farsi)
const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
    const elements = document.querySelectorAll('.lang');
    elements.forEach((element) => {
        element.classList.toggle('lang-en');
        element.classList.toggle('lang-fa');
    });
});
