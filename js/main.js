document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const mainNav = document.getElementById('main-nav');

    // Toggle menu visibility on burger menu click
    burgerMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        mainNav.classList.toggle('open');
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!mainNav.contains(e.target) && !burgerMenu.contains(e.target)) {
            mainNav.classList.remove('open');
        }
    });
});
