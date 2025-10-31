// ============================================
// WEDDING WEBSITE CONFIGURATION
// ============================================
// Update these values to enable features
const WEDDING_CONFIG = {
    // YouTube Live Stream URL for Wedding
    // Example: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
    // Or: 'https://youtu.be/YOUR_VIDEO_ID'
    youtubeLiveUrl: '', // Add your YouTube live URL here
    
    // Enable YouTube Live button for Wedding section
    enableYouTubeWedding: false, // Set to true to show YouTube button in Wedding section
    
    // Enable YouTube Live button for Reception section
    enableYouTubeReception: false, // Set to true to show YouTube button in Reception section
    
    // Photos/Drive URL (optional)
    photosDriveUrl: '',
    enablePhotos: false
};

// ============================================
// WEDDING COUNTDOWN TIMER
// ============================================
function updateCountdown() {
    // Set the wedding date: November 1st, 2025 at 10:58 AM
    const weddingDate = new Date('2025-11-01T10:58:00');
    const now = new Date();
    
    const timeLeft = weddingDate - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        // Update the countdown display
        const daysElement = document.getElementById('days');
        const hoursElement = document.getElementById('hours');
        const minutesElement = document.getElementById('minutes');
        
        if (daysElement) daysElement.textContent = days;
        if (hoursElement) hoursElement.textContent = hours;
        if (minutesElement) minutesElement.textContent = minutes;
    } else {
        // Wedding day has arrived!
        const countdownTimer = document.querySelector('.countdown-timer');
        if (countdownTimer) {
            countdownTimer.innerHTML = '<div class="countdown-item"><span class="countdown-number">🎉</span><span class="countdown-label">TODAY!</span></div>';
        }
    }
}

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    // Hamburger menu toggle
    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding section
            const targetSection = link.getAttribute('data-section');
            const section = document.getElementById(targetSection);
            if (section) {
                section.classList.add('active');
            }
            
            // Close mobile menu after selection
            if (hamburgerMenu && navMenu) {
                hamburgerMenu.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (hamburgerMenu && navMenu && 
            !hamburgerMenu.contains(e.target) && 
            !navMenu.contains(e.target) && 
            navMenu.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Smooth scroll for navigation
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add animation effects
function initAnimations() {
    // Add fade-in animation to elements
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
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.event-details > *');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add click effects to buttons
function initButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add CSS for ripple effect
function addRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .cta-button {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Mobile-specific optimizations
function initMobileOptimizations() {
    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Improve touch scrolling
    document.body.style.webkitOverflowScrolling = 'touch';
    
    // Add mobile-specific classes
    if (window.innerWidth <= 768) {
        document.body.classList.add('mobile-device');
    }
    
    // Handle orientation change
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            // Recalculate layout after orientation change
            window.dispatchEvent(new Event('resize'));
        }, 100);
    });
}

// Enhanced button effects for mobile
function initMobileButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        // Add touch feedback
        button.addEventListener('touchstart', function(e) {
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        button.addEventListener('touchend', function(e) {
            this.style.transform = 'scale(1)';
        });
        
        // Prevent default touch behavior for better UX
        button.addEventListener('touchmove', function(e) {
            e.preventDefault();
        });
    });
}

// ============================================
// FUTURE FEATURES INITIALIZATION
// ============================================
function initFutureFeatures() {
    // Enable YouTube Live button for Wedding section
    const weddingSection = document.getElementById('wedding');
    if (weddingSection) {
        const weddingYoutubeButton = weddingSection.querySelector('.youtube-button');
        if (weddingYoutubeButton && WEDDING_CONFIG.enableYouTubeWedding && WEDDING_CONFIG.youtubeLiveUrl) {
            weddingYoutubeButton.style.display = 'flex';
            weddingYoutubeButton.addEventListener('click', function() {
                window.open(WEDDING_CONFIG.youtubeLiveUrl, '_blank');
            });
            console.log('✅ YouTube Live button enabled for Wedding section');
        }
    }
    
    // Enable YouTube Live button for Reception section
    const receptionSection = document.getElementById('reception');
    if (receptionSection) {
        const receptionYoutubeButton = receptionSection.querySelector('.youtube-button');
        if (receptionYoutubeButton && WEDDING_CONFIG.enableYouTubeReception && WEDDING_CONFIG.youtubeLiveUrl) {
            receptionYoutubeButton.style.display = 'flex';
            receptionYoutubeButton.addEventListener('click', function() {
                window.open(WEDDING_CONFIG.youtubeLiveUrl, '_blank');
            });
            console.log('✅ YouTube Live button enabled for Reception section');
        }
    }
    
    // Show/hide Photos button (both sections)
    const photosButtons = document.querySelectorAll('.photos-button');
    photosButtons.forEach(button => {
        if (WEDDING_CONFIG.enablePhotos && WEDDING_CONFIG.photosDriveUrl) {
            button.style.display = 'flex';
            button.addEventListener('click', function() {
                window.open(WEDDING_CONFIG.photosDriveUrl, '_blank');
            });
        }
    });
    
    // Configuration status log
    console.log('🎊 Wedding Website Configuration Loaded!');
    if (WEDDING_CONFIG.enableYouTubeWedding || WEDDING_CONFIG.enableYouTubeReception) {
        console.log('📺 YouTube Live: Enabled');
    }
    if (WEDDING_CONFIG.enablePhotos) {
        console.log('📷 Photos: Enabled');
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initSmoothScroll();
    initAnimations();
    initButtonEffects();
    initMobileButtonEffects();
    initMobileOptimizations();
    initFutureFeatures();
    addRippleStyles();
    
    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000); // Update every second
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add some interactive effects
document.addEventListener('mousemove', function(e) {
    const heroImages = document.querySelectorAll('.hero-image');
    
    heroImages.forEach(image => {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const moveX = (x - centerX) / 20;
            const moveY = (y - centerY) / 20;
            
            image.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
});

// Reset transform on mouse leave
document.addEventListener('mouseleave', function() {
    const heroImages = document.querySelectorAll('.hero-image');
    heroImages.forEach(image => {
        image.style.transform = 'translate(0, 0)';
    });
});
