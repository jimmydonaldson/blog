function darkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', 'dark');
}

function lightMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', 'light');
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});