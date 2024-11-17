// Icon configuration
const iconConfig = {
  size: 24,
  strokeWidth: 1.5,
  class: 'icon'
};

// Initialize all Lucide icons
function initializeIcons() {
  lucide.createIcons({
    ...iconConfig,
    nameAttr: 'data-icon' // This allows us to specify icons using data-icon attribute
  });
}

// Update specific icon
function updateIcon(element, newIcon) {
  element.setAttribute('data-icon', newIcon);
  lucide.createIcons({
    ...iconConfig,
    elements: [element]
  });
}

// Export for use in other files
window.IconUtils = {
  updateIcon,
  initializeIcons
}; 