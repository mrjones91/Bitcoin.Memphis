class ThemeManager {
    constructor() {
        this.isDark = this.getInitialTheme();
        this.init();
    }

    getInitialTheme() {
        const stored = localStorage.getItem('darkMode');
        if (stored !== null) {
            return stored === 'true';
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    init() {
        this.updateTheme();
        this.setupEventListeners();
        window.IconUtils.initializeIcons();
    }

    updateTheme() {
        if (this.isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', String(this.isDark));
    }

    setupEventListeners() {
        ['themeToggle', 'themeToggleMobile'].forEach(id => {
            const button = document.getElementById(id);
            if (button) {
                button.addEventListener('click', () => this.toggleTheme());
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
}); 