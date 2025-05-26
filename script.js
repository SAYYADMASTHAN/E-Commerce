let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

document.getElementById('view-cart').addEventListener('click', () => {
    const cartSection = document.getElementById('cart-section');
    cartSection.classList.toggle('hidden');

    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    document.getElementById('total').innerText = `Total: $${total}`;
});
