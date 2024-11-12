document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: "CPAP Avanzado", description: "Máquina CPAP de última generación", price: 799.99, image: "/placeholder.svg?height=200&width=200", category: "Máquinas CPAP" },
        { id: 2, name: "Mascarilla Nasal Cómoda", description: "Mascarilla nasal ligera", price: 129.99, image: "/placeholder.svg?height=200&width=200", category: "Mascarillas" },
        { id: 3, name: "Humidificador Integrado", description: "Humidificador compatible", price: 89.99, image: "/placeholder.svg?height=200&width=200", category: "Accesorios" },
        { id: 4, name: "Almohada Anti-Apnea", description: "Almohada especialmente diseñada", price: 59.99, image: "/placeholder.svg?height=200&width=200", category: "Comodidad del Sueño" },
        { id: 5, name: "Filtros de Aire Premium", description: "Paquete de filtros de aire", price: 24.99, image: "/placeholder.svg?height=200&width=200", category: "Accesorios" },
        { id: 6, name: "Limpiador Automático de CPAP", description: "Dispositivo de limpieza automática", price: 299.99, image: "/placeholder.svg?height=200&width=200", category: "Limpieza y Mantenimiento" }
    ];

    const categories = ["Máquinas CPAP", "Mascarillas", "Accesorios", "Comodidad del Sueño", "Limpieza y Mantenimiento"];

    function renderProductGrid(containerId, productList) {
        const container = document.getElementById(containerId);
        productList.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product-item';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p>$${product.price.toFixed(2)}</p>
            `;
            container.appendChild(productElement);
        });
    }

    function renderCategories() {
        const categoryGrid = document.querySelector('.category-grid');
        categories.forEach(category => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category-card';
            categoryCard.innerHTML = `
                <h3>${category}</h3>
                <p>Explora nuestra selección de productos de ${category.toLowerCase()}.</p>
                <a href="category.html?category=${encodeURIComponent(category)}" class="primary-button">Ver Productos</a>
            `;
            categoryGrid.appendChild(categoryCard);
        });
    }

    // Render recently viewed products
    renderProductGrid('recently-viewed', products.slice(0, 4));

    // Render products under $100
    renderProductGrid('under-100', products.filter(p => p.price < 100).slice(0,4));

    // Render favorite products (for demo, using the first 4 products)
    renderProductGrid('favorites', products.slice(0,4));

    // Render categories
    renderCategories();
});
