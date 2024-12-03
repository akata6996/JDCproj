// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animate Sections on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Fade In Animation Handler
const handleScrollAnimation = () => {
    const sections = document.querySelectorAll('.fade-in-hidden');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('fadeInUp');
            section.classList.remove('fade-in-hidden');
        }
    });
};

// Event Listeners for Scroll Animation
['scroll', 'load'].forEach(event => 
    window.addEventListener(event, handleScrollAnimation)
);

// Initial animation check
handleScrollAnimation();

// Create and inject Schema.org JSON-LD
const schemaScript = document.createElement('script');
schemaScript.type = 'application/ld+json';
schemaScript.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "John D. Cadore, MPA.",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "34 Chenango Street, Suite 202",
        "addressLocality": "Binghamton",
        "addressRegion": "NY",
        "postalCode": "13901"
    }
});
document.head.appendChild(schemaScript);

// Add to your scripts.js file
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth < 968) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    });
});

// Add this to your scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.modern-header');
    const body = document.body;
    
    function adjustBodyPadding() {
        const headerHeight = header.offsetHeight;
        body.style.paddingTop = headerHeight + 'px';
    }

    // Initial adjustment
    adjustBodyPadding();

    // Adjust on window resize
    window.addEventListener('resize', adjustBodyPadding);
});

// Add this at the end of your HTML file or in scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Handle dropdowns on mobile
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 968) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    });
});

// Add to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Previous mobile menu code...

    // Prevent ghost clicks
    let touchStartY = 0;
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, false);

    document.addEventListener('touchmove', function(e) {
        const touchY = e.touches[0].clientY;
        const scrolled = touchStartY - touchY;

        if (Math.abs(scrolled) > 10) {
            e.preventDefault();
        }
    }, { passive: false });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navMenu.classList.contains('active') && 
            !e.target.closest('.nav-menu') && 
            !e.target.closest('.mobile-menu-btn')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Toggle body scroll
    mobileMenuBtn.addEventListener('click', function() {
        document.body.classList.toggle('menu-open');
    });
});
