// Fetch user data from localStorage
const userEmail = localStorage.getItem('userEmail');

// If user is not logged in, redirect to login page
if (!userEmail) {
    window.location.href = "login.html";
} else {
    // Update the profile with the logged-in user's email
    document.getElementById('user-email-detail').textContent = userEmail;
    document.getElementById('user-name').textContent = userEmail.split('@')[0];  // Set username from email
    document.getElementById('user-name-detail').textContent = userEmail.split('@')[0];
}

// Example function for edit profile (you can expand this to a full form)
function editProfile() {
    alert("Profile edit functionality is under development.");
}

