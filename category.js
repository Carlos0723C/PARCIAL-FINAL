document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: "CPAP Avanzado", description: "Máquina CPAP de última generación", price: 799.99, image: "/placeholder.svg?height=200&width=200", category: "Máquinas CPAP" },
        { id: 2, name: "Mascarilla Nasal Cómoda", description: "Mascarilla nasal ligera", price: 129.99, image: "/placeholder.svg?height=200&width=200", category: "Mascarillas" },
        { id: 3, name: "Humidificador Integrado", description: "Humidificador compatible", price: 89.99, image: "/placeholder.svg?height=200&width=200", category: "Accesorios" },
        { id: 4, name: "Almohada Anti-Apnea", description: "Almohada especialmente diseñada", price: 59.99, image: "/placeholder.svg?height=200&width=200", category: "Comodidad del Sueño" },
        { id: 5, name: "Filtros de Aire Premium", description: "Paquete de filtros de aire", price: 24.99, image: "/placeholder.svg?height=200&width=200", category: "Accesorios" },
        { id: 6, name: "Limpiador Automático de CPAP", description: "Dispositivo de limpieza automática", price: 299.99, image: "/placeholder.svg?height=200&width=200", category: "Limpieza y Mantenimiento" }
    ];

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    function renderCategoryProducts(category) {
        const productGrid = document.getElementById('product-grid');
        const categoryTitle = document.getElementById('category-title');
        categoryTitle.textContent = `Productos de ${category}`;

        const categoryProducts = products.filter(product => product.category === category);

        categoryProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="primary-button">Añadir al carrito</button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    const category = getUrlParameter('category');
    if (category) {
        renderCategoryProducts(category);
    } else {
        window.location.href = 'index.html';
    }
});
