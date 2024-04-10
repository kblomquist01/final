const redirectElement = document.getElementById('goHome');

// Add a click event listener to the <h1> element
redirectElement.addEventListener('click', function() {
    // Define the URL you want to redirect to
    const redirectTo = 'index.html'; // Replace 'https://example.com' with your desired URL

    // Redirect to the specified URL
    window.location.href = redirectTo;
});