document.addEventListener("DOMContentLoaded", function() {
    // Seleziona tutti gli elementi con la classe reveal-on-scroll
    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    
    // Funzione che controlla se un elemento è nel viewport
    function checkIfInView() {
      elementsToReveal.forEach(element => {
        // Ottieni la posizione dell'elemento rispetto al viewport
        const rect = element.getBoundingClientRect();
        // Considera l'elemento visibile quando è nel viewport con un margine di 50px dall'alto
        const isInView = rect.top <= window.innerHeight - 50;
        
        if (isInView) {
          element.classList.add('is-visible');
        }
      });
    }
    
    // Controlla gli elementi al caricamento della pagina
    checkIfInView();
    
    // Controlla gli elementi durante lo scroll
    window.addEventListener('scroll', checkIfInView);
  });