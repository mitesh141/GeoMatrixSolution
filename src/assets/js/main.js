// Add this to your JavaScript
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function handleScroll() {
    var fadeElements = document.querySelectorAll('.fade-up');
    
    fadeElements.forEach(function(element) {
        if (isElementInViewport(element.parentElement)) {
            element.classList.add('fade-up-active');
        }
    });
}
window.addEventListener('scroll', handleScroll);


