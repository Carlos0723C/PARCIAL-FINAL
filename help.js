document.addEventListener('DOMContentLoaded', function() {
    const helpCards = document.querySelectorAll('.help-card');
    const searchInput = document.querySelector('.search-section input');
    const searchButton = document.querySelector('.search-section button');

    // Añadir funcionalidad a las tarjetas de ayuda
    helpCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            alert(`Has seleccionado: ${title}. Aquí se mostraría más información sobre este tema.`);
        });
    });

    // Funcionalidad de búsqueda
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        helpCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            if (cardText.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Actualizar el contador del carrito (ejemplo)
    const cartCount = document.querySelector('.cart-count');
    let count = 0;
    setInterval(() => {
        count = (count + 1) % 10;  // Simula cambios en el carrito
        cartCount.textContent = count;
    }, 5000);
});