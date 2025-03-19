// hom.js (optional JavaScript file)

// Search for pharmacies
function searchPharmacy() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const pharmacyList = document.getElementById('pharmacy-list');
    const pharmacies = pharmacyList.getElementsByClassName('pharmacy-card');

    Array.from(pharmacies).forEach(pharmacy => {
        const pharmacyName = pharmacy.getElementsByTagName('h3')[0].textContent.toLowerCase();
        if (pharmacyName.includes(searchQuery)) {
            pharmacy.style.display = 'block';
        } else {
            pharmacy.style.display = 'none';
        }
    });
}

// Add selected pharmacy to the cart
function addToCart(pharmacyName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.includes(pharmacyName)) {
        cart.push(pharmacyName);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(pharmacyName + ' has been added to your cart!');
    } else {
        alert(pharmacyName + ' is already in your cart.');
    }
}


