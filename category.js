// category.js

// Función para obtener el parámetro de la URL (como 'category=dispositivos')
function getCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('category');
}

// Cargar los productos de la categoría seleccionada
fetch('data/products.json')
    .then(response => response.json())
    .then(products => {
        const category = getCategoryFromURL();
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    })
    .catch(error => console.error('Error al cargar los productos:', error));

// Mostrar los productos filtrados
function displayProducts(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; // Limpiar cualquier contenido previo

    if (products.length === 0) {
        productGrid.innerHTML = '<p>No hay productos disponibles en esta categoría.</p>';
    } else {
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span class="price">$${product.price}</span>
                <button class="primary-button" onclick="addToCart(${product.id})">Agregar al carrito</button>
            `;
            productGrid.appendChild(productItem);
        });
    }
}

// Función para agregar productos al carrito (uso localStorage)
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto agregado al carrito');
}
