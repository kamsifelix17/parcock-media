document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ScrollReveal Implementation ---
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.reveal-up', {
            distance: '40px',
            duration: 800,
            easing: 'ease-out',
            origin: 'bottom',
            interval: 150,
            viewFactor: 0.2
        });
    }

    // --- 2. Dynamic Video Modal Logic (Hero Only) ---
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.closest('.w-full.max-w-4xl') === null) {
                closeModal();
            }
        });
    }

    // --- 3. WhatsApp Form Integration ---
    const whatsappForm = document.getElementById('whatsappForm');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const name = document.getElementById('waName').value.trim();
            const service = document.getElementById('waService').value;
            const message = document.getElementById('waMessage').value.trim();
            
            const phoneNumber = '2349064456056';
            const text = `Hello Parcock Media! 👋\n\nMy name is *${name}*.\nI am interested in your *${service}* services.\n\nHere are some details about my project:\n"${message}"\n\nLooking forward to hearing from you!`;
            
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
            window.open(whatsappUrl, '_blank');
            whatsappForm.reset();
        });
    }

    // --- 4. Mobile Navigation Toggle ---
    const mobileBtn = document.querySelector('button.md\\:hidden'); 
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileBtn.innerHTML = '<i class="bi bi-x-lg"></i>'; 
            document.body.style.overflow = 'hidden'; 
        } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            mobileBtn.innerHTML = '<i class="bi bi-list"></i>'; 
            document.body.style.overflow = '';
        }
    };

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    }

    // --- 5. Calendly "Book a Call" Integration ---
    // Fixed: Uses a valid Vanilla JS method instead of jQuery
    const allLinksAndButtons = document.querySelectorAll('a, button');
    
    allLinksAndButtons.forEach(btn => {
        if(btn.textContent.includes('Book a Call')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                // Safety check to ensure Calendly script loaded successfully
                if (typeof Calendly !== 'undefined') {
                    Calendly.initPopupWidget({ url: 'https://calendly.com/YOUR_CALENDLY_LINK' });
                } else {
                    console.warn("Calendly script is not loaded yet.");
                }
                return false;
            });
        }
    });
});