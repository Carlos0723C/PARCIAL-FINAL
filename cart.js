// cart.js
document.addEventListener('DOMContentLoaded', loadCart);

function loadCart() {
    const cartItems = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    fetch('data/products.json')
        .then(response => response.json())
        .then(products => {
            cart.forEach(productId => {
                const product = products.find(p => p.id === productId);
                const item = document.createElement('div');
                item.textContent = `${product.name} - $${product.price}`;
                cartItems.appendChild(item);
            });
        });
}

function checkout() {
    alert('Compra finalizada');
    localStorage.removeItem('cart');
    location.reload();
}
