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

    // --- 2. WhatsApp Form Integration ---
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

    // --- 3. Mobile Navigation Toggle ---
    const mobileBtn = document.getElementById('mobile-menu-btn'); 
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    const setMenuState = (open) => {
        isMenuOpen = open;
        if (!mobileBtn || !mobileMenu) return;

        if (isMenuOpen) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileBtn.innerHTML = '<i class="bi bi-x-lg"></i>';
            mobileBtn.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            mobileBtn.innerHTML = '<i class="bi bi-list"></i>';
            mobileBtn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    };

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            setMenuState(!isMenuOpen);
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                setMenuState(false);
            });
        });
    }

    // --- 4. Calendly "Book a Call" Integration ---
    const allLinksAndButtons = document.querySelectorAll('a, button');
    
    allLinksAndButtons.forEach(btn => {
        if (btn.textContent.includes('Book a Call')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
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