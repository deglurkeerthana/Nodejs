window.onload = () => {
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));

    if (orderDetails && userDetails) {
        // Displaying the medicines ordered
        let orderContent = `
            <h3>Medicines Ordered</h3>
            <ul>
        `;

        let totalAmount = 0;
        orderDetails.forEach(item => {
            orderContent += `
                <li>
                    <strong>Medicine:</strong> ${item.name}<br>
                    <strong>Quantity:</strong> ${item.quantity}<br>
                    <strong>Price per unit:</strong> $${item.price}<br>
                    <strong>Total:</strong> $${item.quantity * item.price}
                </li>
                <hr>
            `;
            totalAmount += item.quantity * item.price;
        });

        orderContent += `</ul><h4>Total: $${totalAmount}</h4>`;

        // Set order details to the page
        document.getElementById('order-details').innerHTML = orderContent;

        // Calculate and display delivery date
        const orderDate = new Date();
        const deliveryDate = new Date(orderDate);
        deliveryDate.setDate(orderDate.getDate() + 2); // Delivery in 2 days

        // Format the date to a readable format
        const formattedDeliveryDate = deliveryDate.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        document.getElementById('delivery-date').textContent = formattedDeliveryDate;

        // Generate and display a tracking number
        const trackingNumber = generateTrackingNumber();
        document.getElementById('tracking-number').textContent = trackingNumber;
        localStorage.setItem('trackingNumber', trackingNumber); // Save tracking number to localStorage
    } else {
        document.getElementById('order-details').innerHTML = '<p>No order details available.</p>';
    }
};

// Function to generate a random tracking number (simulate Amazon-like tracking)
function generateTrackingNumber() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let trackingNumber = '';
    for (let i = 0; i < 12; i++) {
        trackingNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return trackingNumber;
}
