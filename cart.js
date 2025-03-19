// Function to render the cart
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartListContainer = document.getElementById('cart-list');
    const totalPriceContainer = document.getElementById('total-price');
    cartListContainer.innerHTML = ''; // Clear existing cart items

    let totalPrice = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Total: $${item.price * item.quantity}</p>
        `;
        cartListContainer.appendChild(cartItem);
        totalPrice += item.price * item.quantity;
    });

    totalPriceContainer.innerText = totalPrice;
    // Store the total price for final checkout confirmation
    document.getElementById('final-total-price').innerText = totalPrice;
}

// Function to handle the "Proceed to Checkout" button
document.getElementById('proceed-btn').addEventListener('click', () => {
    const checkoutSection = document.getElementById('checkout-section');
    checkoutSection.style.display = 'block'; // Show the checkout section
    const totalPriceContainer = document.getElementById('total-price');
    totalPriceContainer.style.display = 'none'; // Hide the original total price display
    document.getElementById('proceed-btn').style.display = 'none'; // Hide the proceed button
});

// Function to handle the "Confirm and Pay" button
document.getElementById('confirm-btn').addEventListener('click', () => {
    // Here you would typically handle payment logic and empty the cart after confirmation
    localStorage.removeItem('cart'); // Remove the cart from localStorage
    alert("Order confirmed! Your payment is being processed.");
    
    // Redirect to the "buy" page (change this URL to your desired page)
    window.location.href = 'buy.html'; // Change this URL to the actual page you want to redirect to
});

// Function to handle the "Cancel" button (go back to cart)
document.getElementById('cancel-btn').addEventListener('click', () => {
    const checkoutSection = document.getElementById('checkout-section');
    checkoutSection.style.display = 'none'; // Hide the checkout section
    document.getElementById('proceed-btn').style.display = 'inline-block'; // Show the proceed button again
    document.getElementById('total-price').style.display = 'block'; // Show the total price again
});

// Initialize the cart page
window.onload = () => {
    renderCart(); // Render the cart when the page loads
};


