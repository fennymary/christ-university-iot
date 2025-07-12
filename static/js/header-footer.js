// Header and Footer functionality for Industrial IoT Lab Static Site

document.addEventListener('DOMContentLoaded', function() {
    initializeHeader();
    initializeFooter();
    setActiveNavigation();
});

// Initialize header functionality
function initializeHeader() {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeMobileMenu && mobileMenu) {
        closeMobileMenu.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close mobile menu when clicking outside
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
}

// Initialize footer functionality
function initializeFooter() {
    // Social media links
    const socialLinks = {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com'
    };
    
    Object.keys(socialLinks).forEach(platform => {
        const link = document.getElementById(`${platform}Link`);
        if (link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.open(socialLinks[platform], '_blank');
            });
        }
    });
}

// Set active navigation based on current page
function setActiveNavigation() {
    const currentPage = getCurrentPageName();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const linkPage = getPageNameFromHref(href);
        
        if (linkPage === currentPage) {
            link.classList.add('active');
            link.classList.add('text-[#d3b77b]');
            
            // Add underline for desktop navigation
            if (!link.closest('#mobileMenu')) {
                link.classList.add('after:absolute', 'after:bottom-[-4px]', 'after:left-0', 'after:w-full', 'after:h-0.5', 'after:bg-[#d3b77b]');
                link.style.position = 'relative';
            }
        }
    });
}

// Get current page name from URL
function getCurrentPageName() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    if (!filename || filename === '' || filename === 'index.html') {
        return 'index';
    }
    
    return filename.replace('.html', '');
}

// Get page name from href attribute
function getPageNameFromHref(href) {
    if (!href) return '';
    
    if (href === 'index.html' || href === '/') {
        return 'index';
    }
    
    return href.replace('.html', '');
}

// Navigation helper function
function navigateTo(url) {
    window.location.href = url;
}

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll-to-top functionality
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    }
});

// Header scroll effect
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const header = document.getElementById('mainHeader');
    if (!header) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Add backdrop blur to header on scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('mainHeader');
    if (!header) return;
    
    if (window.scrollY > 50) {
        header.classList.add('backdrop-blur-md', 'bg-white/90');
        header.classList.remove('bg-transparent');
    } else {
        header.classList.remove('backdrop-blur-md', 'bg-white/90');
        header.classList.add('bg-transparent');
    }
});

// Responsive navigation handling
function handleResponsiveNav() {
    const mobileMenu = document.getElementById('mobileMenu');
    const desktopNav = document.getElementById('desktopNav');
    
    if (window.innerWidth >= 768) {
        // Desktop view
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }
}

// Handle window resize
window.addEventListener('resize', handleResponsiveNav);

// Initialize on load
handleResponsiveNav();
