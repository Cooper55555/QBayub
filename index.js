function enlargeImage(img) {
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = img.src;
    overlay.style.display = 'flex';
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}