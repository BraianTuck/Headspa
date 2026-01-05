// Initialize Lucide Icons
lucide.createIcons();

// Custom interactions
document.addEventListener('DOMContentLoaded', () => {
    console.log('Zenith HeadSpa Loaded');

    // Optional: Add intersection observer for fade-in animations on scroll
    // This replicates the "wow" factor if we want to add it later.

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Mobile Menu Toggle Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    if (mobileMenuBtn && mobileMenuOverlay) {
        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-[-20px]');
                mobileMenuBtn.textContent = 'CERRAR';
                mobileMenuBtn.classList.add('bg-primary', 'text-white');
            } else {
                mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none', 'translate-y-[-20px]');
                mobileMenuBtn.textContent = 'MENÚ';
                mobileMenuBtn.classList.remove('bg-primary', 'text-white');
            }
        });

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none', 'translate-y-[-20px]');
                mobileMenuBtn.textContent = 'MENÚ';
                mobileMenuBtn.classList.remove('bg-primary', 'text-white');
            });
        });
    }

    // WhatsApp Form Handler
    const whatsappForm = document.getElementById('whatsapp-form');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const mensaje = document.getElementById('mensaje').value;
            const telefono = '59899250734'; // International format

            // Construct message
            const text = `Hola, mi nombre es ${nombre}. ${mensaje}`;
            const encodedText = encodeURIComponent(text);

            // Redirect to WhatsApp
            const whatsappUrl = `https://wa.me/${telefono}?text=${encodedText}`;
            window.open(whatsappUrl, '_blank');
        });
    }

});
