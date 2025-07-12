// Main JavaScript for Industrial IoT Lab Static Site

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeAnimations();
    initializeTabs();
    initializeProgressBar();
    initializeHoverEffects();
    initializeScrollAnimations();
});

// Initialize background shape animations
function initializeAnimations() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        const delay = index * 0.2;
        shape.style.animationDelay = `${delay}s`;
    });
}

// Initialize tab functionality
function initializeTabs() {
    const tabTriggers = document.querySelectorAll('.tab-trigger');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all triggers and contents
            tabTriggers.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => {
                c.classList.remove('active');
                c.classList.add('hidden');
            });
            
            // Add active class to clicked trigger
            this.classList.add('active');
            
            // Show target content
            const targetContent = document.getElementById(`${targetTab}-tab`);
            if (targetContent) {
                targetContent.classList.add('active');
                targetContent.classList.remove('hidden');
            }
        });
    });
}

// Initialize progress bar animation
function initializeProgressBar() {
    // Simulate progress loading (if progress bar exists)
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        setTimeout(() => {
            progressBar.style.width = '66%';
        }, 500);
    }
}

// Initialize hover effects for cards and buttons
function initializeHoverEffects() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card-hover, .transform.transition-all.hover\\:scale-105');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // Add hover effects to technology circles
    const techCircles = document.querySelectorAll('.w-32.h-32.rounded-full');
    
    techCircles.forEach(circle => {
        circle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        circle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
        });
    });
}

// Initialize scroll-based animations
function initializeScrollAnimations() {
    // Create intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Utility function for smooth scrolling
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navigation helper function
function navigateTo(url) {
    window.location.href = url;
}

// Add click handlers for navigation buttons
document.addEventListener('click', function(e) {
    // Handle navigation buttons
    if (e.target.matches('[data-navigate]')) {
        const url = e.target.getAttribute('data-navigate');
        navigateTo(url);
    }
    
    // Handle external links
    if (e.target.matches('[data-external]')) {
        const url = e.target.getAttribute('data-external');
        window.open(url, '_blank');
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Tab navigation for accessibility
    if (e.key === 'Tab') {
        // Add focus styles
        document.body.classList.add('keyboard-navigation');
    }
    
    // Escape key to close modals (if any)
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

// Remove keyboard navigation class on mouse use
document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Window resize handler
const handleResize = debounce(() => {
    // Recalculate any size-dependent elements
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
        // Adjust shape sizes for mobile if needed
        if (window.innerWidth < 768) {
            shape.style.width = '50%';
            shape.style.height = '50%';
        } else {
            shape.style.width = '';
            shape.style.height = '';
        }
    });
}, 250);

window.addEventListener('resize', handleResize);

// Error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

function safeQuerySelectorAll(selector) {
    try {
        return document.querySelectorAll(selector);
    } catch (error) {
        console.warn(`Elements not found: ${selector}`);
        return [];
    }
}

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLazyLoading);
} else {
    initializeLazyLoading();
}

// Export functions for use in other scripts
window.IoTLab = {
    navigateTo,
    smoothScrollTo,
    debounce,
    throttle
};
