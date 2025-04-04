// Animation Observer
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Add animation when element becomes visible
        if (entry.isIntersecting) {
            entry.target.classList.remove('elementor-invisible');
            
            // Add animation class based on data attribute
            const animation = entry.target.getAttribute('data-animation');
            if (animation) {
                entry.target.classList.add('animated', animation);
            }
            
            // Stop observing after animation is added
            animationObserver.unobserve(entry.target);
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when at least 10% of the element is visible
});

// Initialize animations on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Find all elements that should be animated
    const animatedElements = document.querySelectorAll('.elementor-invisible[data-animation]');
    
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });

    const timeElement = document.getElementById('time-element');
    
    if (!timeElement) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Rimuovi hidden e aggiungi la classe per l'animazione
                timeElement.removeAttribute('hidden');
                timeElement.classList.add('fadeInUp');
                
                // Una volta che l'elemento è stato animato, smetti di osservarlo
                observer.unobserve(timeElement);
            }
        });
    }, {
        threshold: 0.1 // L'animazione parte quando almeno il 10% dell'elemento è visibile
    });

    // Inizia ad osservare l'elemento
    observer.observe(timeElement);
}); 