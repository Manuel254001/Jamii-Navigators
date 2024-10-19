// Function to update the current year in the footer
function updateYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("spanDate").textContent = currentYear;
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", updateYear);

// Event listener for the sign-up button
document.getElementById("signupButton").addEventListener("click", function() {
    alert("Thank you for your interest! We will get back to you soon.");
});