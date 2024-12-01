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
