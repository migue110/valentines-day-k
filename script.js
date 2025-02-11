// script.js

// Check if there is a stored click count when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    let storedClickCount = sessionStorage.getItem('noButtonClickCount');
    if (storedClickCount) {
        noButtonClickCount = parseInt(storedClickCount);
    } else {
        noButtonClickCount = 0; // Reset count if not set
    }
});

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Redirect to a new page when "Yes" is clicked
        window.location.href = 'yesClickPage.html'; // Redirect to the Yes click page
    } else if (option === 'no') {
        noButtonClickCount++; // Increment the count each time "no" is pressed
        sessionStorage.setItem('noButtonClickCount', noButtonClickCount); // Update the session storage with the new count

        if (noButtonClickCount === 1) {
            window.location.href = 'firstNoClickPage.html'; // Redirect to the first new page on the first click
        } else if (noButtonClickCount === 2) {
            window.location.href = 'secondNoClickPage.html'; // Redirect to the second new page on the second click
        } else if (noButtonClickCount === 3) {
            window.location.href = 'thirdNoClickPage.html'; // Redirect to the third new page on the third click
        } else if (noButtonClickCount === 4) {
            window.location.href = 'fourthNoClickPage.html'; // Redirect to the fourth new page on the fourth click
        } else if (noButtonClickCount === 5) {
            window.location.href = 'fifthNoClickPage.html'; // Redirect to the fifth new page on the fifth click
        } else if (noButtonClickCount === 6) {
            window.location.href = 'sixthNoClickPage.html'; // Redirect to the sixth new page on the sixth click
        } else if (noButtonClickCount === 7) {
            window.location.href = 'seventhNoClickPage.html'; // Redirect to the seventh new page on the seventh click
        } else {
            // Move "No" button to a random position on the screen from the eigth click onwards
            const noButton = document.getElementById('no-button');
            const maxX = window.innerWidth - noButton.offsetWidth;
            const maxY = window.innerHeight - noButton.offsetHeight;
            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;
            noButton.style.position = 'absolute';  // Ensure the button can move
            noButton.style.left = `${newX}px`;
            noButton.style.top = `${newY}px`;
            noButton.style.transition = 'left 0.5s, top 0.5s ease'; // Smooth movement
        }
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to reset the noButtonClickCount to 1 when going back
function goBack() {
    sessionStorage.setItem('noButtonClickCount', 1); // Reset the click count to 1 when going back
    window.history.back();
}





// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cute-cat-eyes.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // Set a black border around the image
    catImage.style.border = '3px solid black'; // You can adjust the width and style of the border as needed
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}



// Display the cute-cat-eyes.gif initially
displayCat();
