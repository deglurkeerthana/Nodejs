// Sample data for pharmacies and their available medicines
const pharmaciesData = {
    "city-pharmacy": [
        { name: "Paracetamol", price: 5, image: "para.jpg", description: "Used to relieve pain and reduce fever." },
        { name: "Ibuprofen", price: 8, image: "ibuprofen.jpg", description: "Anti-inflammatory drug for pain relief." },
        { name: "Aspirin", price: 6, image: "aspirin.jpg", description: "Pain reliever used for heart conditions." },
        { name: "Cough Syrup", price: 4, image: "cough_syrup.jpg", description: "Helps to relieve coughs and colds." }
    ],
    "health-plus-pharmacy": [
        { name: "Amoxicillin", price: 10, image: "amoxicillin.jpg", description: "Antibiotic for bacterial infections." },
        { name: "Loratadine", price: 7, image: "loratadine.jpg", description: "Antihistamine for allergy relief." },
        { name: "Cough Syrup", price: 5, image: "cough_syrup.jpg", description: "Relieves symptoms of a cough." },
        { name: "Antibiotics", price: 12, image: "antibiotics.jpg", description: "Treats a wide range of bacterial infections." }
    ],
    "quick-med-pharmacy": [
        { name: "Vitamin C", price: 3, image: "vitamin_c.jpg", description: "Boosts immune system and prevents colds." },
        { name: "Zinc Tablets", price: 5, image: "zinc_tablets.jpg", description: "Supports immune health and skin health." },
        { name: "Antacid", price: 2, image: "antacid.jpg", description: "Relieves heartburn and indigestion." },
        { name: "Paracetamol", price: 4, image: "paracetamol.jpg", description: "Pain reliever and fever reducer." }
    ]
};

// Function to get the pharmacy from the URL query string
function getPharmacyFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('pharmacy');
}

// Function to render the medicines based on the selected pharmacy
function renderMedicines(pharmacyId) {
    const pharmacy = pharmacyId.replace('-', ' ').toUpperCase();
    document.getElementById('pharmacy-name').innerText = `${pharmacy} Medicines`;

    const medicines = pharmaciesData[pharmacyId] || [];
    const medicineListContainer = document.getElementById('medicine-list');
    medicineListContainer.innerHTML = ''; // Clear existing list

    medicines.forEach(medicine => {
        const medicineCard = document.createElement('div');
        medicineCard.classList.add('medicine-card');
        medicineCard.innerHTML = `
            <img src="images/${medicine.image}" alt="${medicine.name}" class="medicine-image" />
            <h3>${medicine.name}</h3>
            <p><strong>Price:</strong> $${medicine.price}</p>
            <p><strong>Description:</strong> ${medicine.description}</p>
            <button onclick="addToCart('${medicine.name}', ${medicine.price})">Add to Cart</button>
            <button onclick="buyNow('${medicine.name}', ${medicine.price})">Buy Now</button>
        `;
        medicineListContainer.appendChild(medicineCard);
    });
}

// Function to add medicine to the cart in localStorage and redirect to cart page
function addToCart(medicineName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingItem = cart.find(item => item.name === medicineName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: medicineName, price: price, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to cart page after adding the item to the cart
    window.location.href = "cart.html";
}

// Function to directly proceed to the "Buy Now" page
function buyNow(medicineName, price) {
    // Store the medicine in localStorage to carry over to the "Buy Now" page
    localStorage.setItem('buyNowItem', JSON.stringify({ name: medicineName, price: price }));

    // Redirect to the Buy Now page
    window.location.href = "buy.html";
}

// Search functionality to filter medicines
function filterMedicines() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const medicineCards = document.querySelectorAll('.medicine-card');

    medicineCards.forEach(card => {
        const medicineName = card.querySelector('h3').textContent.toLowerCase();
        if (medicineName.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize the pharmacy page when it loads
window.onload = () => {
    const pharmacyId = getPharmacyFromUrl(); // Get pharmacy ID from URL
    renderMedicines(pharmacyId); // Render medicines for the selected pharmacy
};




