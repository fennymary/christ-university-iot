// Swiper initialization for Industrial IoT Lab Static Site

document.addEventListener('DOMContentLoaded', function() {
    initializeLabSwiper();
    initializeTestingSwiper();
});

// Initialize the lab images carousel
function initializeLabSwiper() {
    const labSwiperElement = document.querySelector('.lab-swiper');
    
    if (labSwiperElement) {
        const labSwiper = new Swiper('.lab-swiper', {
            // Basic settings
            spaceBetween: 30,
            slidesPerView: 1,
            loop: true,
            
            // Autoplay
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            
            // Pagination
            pagination: {
                el: '.lab-swiper .swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            
            // Navigation arrows (if needed)
            navigation: {
                nextEl: '.lab-swiper .swiper-button-next',
                prevEl: '.lab-swiper .swiper-button-prev',
            },
            
            // Effects
            effect: 'slide',
            
            // Speed
            speed: 600,
            
            // Responsive breakpoints
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            },
            
            // Events
            on: {
                init: function() {
                    console.log('Lab swiper initialized');
                },
                slideChange: function() {
                    // Add any slide change logic here
                },
                autoplayStart: function() {
                    console.log('Lab swiper autoplay started');
                },
                autoplayStop: function() {
                    console.log('Lab swiper autoplay stopped');
                }
            }
        });
        
        // Pause autoplay on hover
        labSwiperElement.addEventListener('mouseenter', () => {
            labSwiper.autoplay.stop();
        });
        
        labSwiperElement.addEventListener('mouseleave', () => {
            labSwiper.autoplay.start();
        });
    }
}

// Initialize the testing images carousel
function initializeTestingSwiper() {
    const testingSwiperElement = document.querySelector('.testing-swiper');
    
    if (testingSwiperElement) {
        const testingSwiper = new Swiper('.testing-swiper', {
            // Basic settings
            spaceBetween: 30,
            slidesPerView: 1,
            loop: true,
            
            // Autoplay
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            
            // Pagination
            pagination: {
                el: '.testing-swiper .swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            
            // Navigation arrows (if needed)
            navigation: {
                nextEl: '.testing-swiper .swiper-button-next',
                prevEl: '.testing-swiper .swiper-button-prev',
            },
            
            // Effects
            effect: 'slide',
            
            // Speed
            speed: 600,
            
            // Responsive breakpoints
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 30
                }
            },
            
            // Events
            on: {
                init: function() {
                    console.log('Testing swiper initialized');
                },
                slideChange: function() {
                    // Add any slide change logic here
                },
                autoplayStart: function() {
                    console.log('Testing swiper autoplay started');
                },
                autoplayStop: function() {
                    console.log('Testing swiper autoplay stopped');
                }
            }
        });
        
        // Pause autoplay on hover
        testingSwiperElement.addEventListener('mouseenter', () => {
            testingSwiper.autoplay.stop();
        });
        
        testingSwiperElement.addEventListener('mouseleave', () => {
            testingSwiper.autoplay.start();
        });
    }
}

// Custom pagination bullet styling
function customizePagination() {
    const style = document.createElement('style');
    style.textContent = `
        .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.5) !important;
            opacity: 1 !important;
            width: 12px !important;
            height: 12px !important;
            margin: 0 4px !important;
            transition: all 0.3s ease !important;
        }
        
        .swiper-pagination-bullet-active {
            background: #d3b77b !important;
            transform: scale(1.2) !important;
        }
        
        .swiper-pagination-bullet:hover {
            background: #d3b77b !important;
            transform: scale(1.1) !important;
        }
        
        .swiper-pagination {
            bottom: 20px !important;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
            color: #d3b77b !important;
            background: rgba(255, 255, 255, 0.8) !important;
            border-radius: 50% !important;
            width: 40px !important;
            height: 40px !important;
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
            font-size: 16px !important;
        }
        
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
            background: rgba(255, 255, 255, 1) !important;
            transform: scale(1.1) !important;
        }
    `;
    document.head.appendChild(style);
}

// Initialize custom styling
customizePagination();

// Error handling for Swiper
window.addEventListener('error', function(e) {
    if (e.message && e.message.includes('Swiper')) {
        console.error('Swiper error:', e.message);
        // Fallback: hide swiper containers and show static images
        const swipers = document.querySelectorAll('.swiper');
        swipers.forEach(swiper => {
            swiper.style.display = 'none';
            const fallback = swiper.nextElementSibling;
            if (fallback && fallback.classList.contains('swiper-fallback')) {
                fallback.style.display = 'block';
            }
        });
    }
});

// Utility function to check if Swiper is loaded
function isSwiperLoaded() {
    return typeof Swiper !== 'undefined';
}

// Retry mechanism for Swiper initialization
function retryInitialization() {
    let retries = 0;
    const maxRetries = 5;
    const retryInterval = 1000; // 1 second
    
    const retry = () => {
        if (isSwiperLoaded()) {
            initializeLabSwiper();
            initializeTestingSwiper();
        } else if (retries < maxRetries) {
            retries++;
            setTimeout(retry, retryInterval);
        } else {
            console.error('Failed to load Swiper after maximum retries');
        }
    };
    
    if (!isSwiperLoaded()) {
        retry();
    }
}

// Call retry mechanism if Swiper is not immediately available
if (!isSwiperLoaded()) {
    retryInitialization();
}
