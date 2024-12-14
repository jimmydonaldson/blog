// Function to open the lightbox and display the clicked image
function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src; // Set the image source to the clicked image
    lightbox.classList.add('open'); // Show the lightbox
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('open'); // Hide the lightbox
}

// Add event listener to close the lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(event) {
    const lightboxImg = document.getElementById('lightbox-img');
    
    // Check if the click was on the lightbox background (not on the image)
    if (event.target === this) {
        closeLightbox();
    }
});