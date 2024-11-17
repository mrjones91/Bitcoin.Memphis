const TestUtils = {
    // Theme testing
    testThemeToggle() {
        console.log('Testing theme toggle...');
        const initialTheme = document.documentElement.classList.contains('dark');
        
        // Test desktop toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle?.click();
        console.assert(
            document.documentElement.classList.contains('dark') !== initialTheme,
            'Theme toggle failed to switch theme'
        );

        // Test mobile toggle
        const mobileThemeToggle = document.getElementById('themeToggleMobile');
        mobileThemeToggle?.click();
        console.assert(
            document.documentElement.classList.contains('dark') === initialTheme,
            'Mobile theme toggle failed to switch theme'
        );
    },

    // Mobile menu testing
    testMobileMenu() {
        console.log('Testing mobile menu...');
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        
        // Test menu toggle
        menuToggle?.click();
        console.assert(
            !mobileMenu?.classList.contains('hidden'),
            'Mobile menu failed to open'
        );
        
        menuToggle?.click();
        console.assert(
            mobileMenu?.classList.contains('hidden'),
            'Mobile menu failed to close'
        );
    },

    // Smooth scroll testing
    testSmoothScroll() {
        console.log('Testing smooth scroll...');
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            const targetId = link.getAttribute('href')?.slice(1);
            const target = document.getElementById(targetId);
            console.assert(
                target !== null,
                `Smooth scroll target "${targetId}" not found`
            );
        });
    },

    // Run all tests
    runAllTests() {
        this.testThemeToggle();
        this.testMobileMenu();
        this.testSmoothScroll();
        console.log('All tests completed');
    }
};

// Export for use in browser console
window.TestUtils = TestUtils; 