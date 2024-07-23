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

document.addEventListener('DOMContentLoaded', () => {
    const removeButtons = document.querySelectorAll('.remove-favorite');

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Récupère l'ID du produit à retirer
            const productId = button.getAttribute('data-id');
            const favoriteItem = document.getElementById(productId);

            // Retirer l'élément du DOM
            if (favoriteItem) {
                favoriteItem.remove();
            }

            // Optionnel : Envoyer une requête pour mettre à jour les favoris sur le serveur
            // fetch('/remove-favorite', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({ id: productId })
            // });
        });
    });
});
