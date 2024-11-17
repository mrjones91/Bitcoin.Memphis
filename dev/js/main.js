document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    let isMenuOpen = false;

    menuToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('hidden');
        
        // Update menu icon
        const menuIcon = menuToggle.querySelector('i');
        window.IconUtils.updateIcon(menuIcon, isMenuOpen ? 'x' : 'menu');
    });

    // Handle smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (isMenuOpen) {
                    mobileMenu.classList.add('hidden');
                    const menuIcon = menuToggle.querySelector('i');
                    window.IconUtils.updateIcon(menuIcon, 'menu');
                    isMenuOpen = false;
                }
            }
        });
    });

    // Update copyright year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}); 