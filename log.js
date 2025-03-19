document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the values from the form
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    // For demonstration, you can use basic checks or you can store user info in localStorage/sessionStorage after login
    if (email && phone && password && role) {
        // Redirect based on the role selected
        if (role === "pharmacist") {
            // Redirect to pharmacist dashboard page
            window.location.href = "dashboard.html";
        } else {
            // Redirect to customer home page
            window.location.href = "home.html";
        }
    } else {
        alert("Please fill in all the fields.");
    }
});





