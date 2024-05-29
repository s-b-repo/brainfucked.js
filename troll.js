// Disable mouse events on the page
document.addEventListener('mousemove', function(event) {
    event.stopPropagation();
    event.preventDefault();
}, true);

// Disable keyboard events on the page
document.addEventListener('keydown', function(event) {
    event.stopPropagation();
    event.preventDefault();
}, true);
