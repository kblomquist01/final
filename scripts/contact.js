document.getElementById('Contact').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Display thank you message
    document.getElementById('Contact').style.display = 'none'; // Hide the form
    document.getElementById('thankYouMessage').style.display = 'block'; // Show the thank you message
});