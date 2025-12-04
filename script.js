

// Configuration des options pour l'observateur d'intersection
const observerOptions = {
    threshold: 0.1,  // L'élément doit être visible à 10% pour déclencher l'animation
    rootMargin: '0px 0px -100px 0px'  // Déclenche l'animation 100px avant que l'élément soit visible
};

// Création de l'observateur d'intersection
// Cette API permet de détecter quand un élément entre dans la zone visible de l'écran
const observer = new IntersectionObserver((entries) => {
    // Pour chaque élément observé
    entries.forEach(entry => {
        // Si l'élément est visible dans le viewport
        if (entry.isIntersecting) {
            // Rendre l'élément visible progressivement
            entry.target.style.opacity = '1';
            // Ramener l'élément à sa position normale (annule le translateY)
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Sélectionne toutes les sections sauf le hero (car il est déjà animé au chargement)
document.querySelectorAll('.section:not(.hero)').forEach(section => {
    // État initial : section invisible et décalée vers le bas
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    // Transition fluide pour l'animation
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    // Ajoute la section à l'observateur pour surveiller son apparition
    observer.observe(section);
});

