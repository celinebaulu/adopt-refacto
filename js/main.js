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
            //alert(`Afficher les produits de la catégorie: ${category}`);
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


// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour ajouter un produit aux favoris
    function addToFavorites(productId) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favorites.includes(productId)) {
            favorites.push(productId);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            alert('Produit ajouté aux favoris!');
        } else {
            alert('Ce produit est déjà dans vos favoris!');
        }
    }

    // Fonction pour ajouter un produit au panier
    function addToCart(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (!cart.includes(productId)) {
            cart.push(productId);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Produit ajouté au panier!');
        } else {
            alert('Ce produit est déjà dans le panier!');
        }
    }

    // Gestion des clics sur les boutons
    document.querySelectorAll('.btn-favorite').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            addToFavorites(productId);
        });
    });

    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            addToCart(productId);
        });
    });
});

// sort.js
document.addEventListener('DOMContentLoaded', function() {
    const sortBySelect = document.getElementById('sort-by');

    sortBySelect.addEventListener('change', function() {
        const sortOrder = this.value;
        const productsContainer = document.querySelector('.products');
        const productCards = Array.from(productsContainer.children);

        productCards.sort((a, b) => {
            const titleA = a.querySelector('.product-title').textContent.trim();
            const titleB = b.querySelector('.product-title').textContent.trim();
            const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('€', '').trim());
            const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('€', '').trim());

            if (sortOrder === 'alpha-asc') {
                return titleA.localeCompare(titleB);
            } else if (sortOrder === 'alpha-desc') {
                return titleB.localeCompare(titleA);
            } else if (sortOrder === 'price-asc') {
                return priceA - priceB;
            } else if (sortOrder === 'price-desc') {
                return priceB - priceA;
            } else {
                return 0; // Default
            }
        });

        productsContainer.innerHTML = '';
        productCards.forEach(card => productsContainer.appendChild(card));
    });
});


