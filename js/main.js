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

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.cta-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.closest('.gallery-item').dataset.category;
            alert(`Afficher les produits de la catégorie: ${category}`);
            // Vous pouvez remplacer l'alerte par une redirection ou une autre action selon vos besoins.
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const mainImage = document.querySelector('.main-image');
    const images = document.querySelectorAll('.main-image img');
    const totalImages = images.length;
    let currentIndex = 0;

    function showImage(index) {
        const offset = -index * 100; // Décale l'image en pourcentage
        mainImage.style.transform = `translateX(${offset}%)`;
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    document.querySelector('.carousel-next').addEventListener('click', nextImage);
    document.querySelector('.carousel-prev').addEventListener('click', prevImage);

    // Passage automatique d'image toutes les 5 secondes
    setInterval(nextImage, 5000);

    // Initialisation
    showImage(currentIndex);
});


