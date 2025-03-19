document.getElementById("add-medicine-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the values from the form
    const pharmacy = document.getElementById("select-pharmacy").value;
    const name = document.getElementById("medicine-name").value;
    const price = document.getElementById("medicine-price").value;
    const description = document.getElementById("medicine-description").value;
    const image = document.getElementById("medicine-image").files[0];
    const tablets = document.getElementById("medicine-tablets").value;

    // Check if all the required fields are filled
    if (pharmacy && name && price && description && image && tablets) {
        // Retrieve the existing list of medicines for the selected pharmacy
        let pharmacyMedicines = JSON.parse(localStorage.getItem(pharmacy)) || [];

        // Create a new medicine object
        const newMedicine = {
            name: name,
            price: price,
            description: description,
            image: URL.createObjectURL(image), // This creates a temporary URL for the image file
            tablets: tablets,
            pharmacy: pharmacy // Store the pharmacy along with the medicine
        };

        // Add the new medicine to the selected pharmacy's medicines list
        pharmacyMedicines.push(newMedicine);

        // Save the updated medicines list to localStorage under the pharmacy name
        localStorage.setItem(pharmacy, JSON.stringify(pharmacyMedicines));

        // Display a success message
        alert("Medicine added successfully!");

        // Optionally, clear the form after submission
        document.getElementById("add-medicine-form").reset();

        // Redirect to the home page with the selected pharmacy data
        const redirectUrl = `home.html`;
        window.location.href = redirectUrl;
    } else {
        // If any field is empty, alert the user to fill in all fields
        alert("Please fill in all fields.");
    }
});












