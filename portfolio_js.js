// Mobile Menu Toggle 
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll animations
const scrollElements = document.querySelectorAll('.edu-item, .skill-card, .project-card, .cert-card');
const headerEl = document.querySelector('header');
const aboutImage = document.querySelector('.about-image img');
const aboutTexts = document.querySelectorAll('.about-text h3, .about-text p');
const techStack = document.querySelector('.tech-stack');
const proCards = document.querySelectorAll('.project-card');
const certCards = document.querySelectorAll('.certificate-card');
const contactInfo = document.querySelector('.contact-info');
const contactForm = document.querySelector('.contact-form');

window.addEventListener('scroll', () => {
    // Header shadow on scroll
    if (window.scrollY > 50) {
        headerEl.classList.add('header-scrolled');
    } else {
        headerEl.classList.remove('header-scrolled');
    }
    
    // About section animations
    if (isInViewport(aboutImage)) {
        aboutImage.style.opacity = '1';
        aboutImage.style.transform = 'translateX(0)';
        aboutImage.style.transition = 'all 1s ease';
    }
    
    // About text animations
    aboutTexts.forEach((text, index) => {
        if (isInViewport(text)) {
            text.style.opacity = '1';
            text.style.transform = 'translateX(0)';
            text.style.transition = `all 1s ease ${0.2 * index}s`;
        }
    });
    
    // Tech stack animation
    if (isInViewport(techStack)) {
        techStack.style.opacity = '1';
        techStack.style.transform = 'translateY(0)';
        techStack.style.transition = 'all 1s ease 0.6s';
    }
    
    // Certificate cards animations
    certCards.forEach((card, index) => {
        if (isInViewport(card)) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = `all 0.6s ease ${0.2 * index}s`;
        }
    });
    
    // Contact section animations
    if (isInViewport(contactInfo)) {
        contactInfo.style.opacity = '1';
        contactInfo.style.transform = 'translateX(0)';
        contactInfo.style.transition = 'all 1s ease';
    }
    
    if (isInViewport(contactForm)) {
        contactForm.style.opacity = '1';
        contactForm.style.transform = 'translateX(0)';
        contactForm.style.transition = 'all 1s ease 0.3s';
    }
});

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Add checkScroll function to handle all scroll animations
function checkScroll() {
    // Elements to animate
    const elements = [
        { selector: 'header', offset: 50, classAdd: 'header-scrolled', classRemove: 'header-scrolled' },
        { selector: '.about-image img', offset: 0, animationType: 'fade-left' },
        { selector: '.about-text h3, .about-text p', offset: 0, animationType: 'fade-right' },
        { selector: '.tech-stack', offset: 0, animationType: 'fade-up' },
        { selector: '.project-card', offset: 0, animationType: 'fade-up', delay: true },
        { selector: '.certificate-card', offset: 0, animationType: 'fade-up', delay: true },
        { selector: '.contact-info', offset: 0, animationType: 'fade-left' },
        { selector: '.contact-form', offset: 0, animationType: 'fade-right' }
    ];

    elements.forEach(item => {
        const elems = document.querySelectorAll(item.selector);
        
        elems.forEach((elem, index) => {
            const rect = elem.getBoundingClientRect();
            const inView = rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && rect.bottom >= 0;
            
            if (item.classAdd && item.classRemove) {
                // For header shadow
                if (window.scrollY > item.offset) {
                    elem.classList.add(item.classAdd);
                } else {
                    elem.classList.remove(item.classRemove);
                }
            } else if (inView) {
                // For animation elements
                elem.style.opacity = '1';
                
                // Different animation types
                if (item.animationType === 'fade-left') {
                    elem.style.transform = 'translateX(0)';
                } else if (item.animationType === 'fade-right') {
                    elem.style.transform = 'translateX(0)';
                } else if (item.animationType === 'fade-up') {
                    elem.style.transform = 'translateY(0)';
                }
                
                // Apply delay for sequential animations
                if (item.delay) {
                    elem.style.transition = `all 0.6s ease ${0.15 * index}s`;
                } else {
                    elem.style.transition = 'all 1s ease';
                }
                
                // Add visible class (for projects and other cards)
                elem.classList.add('visible');
            } else {
                // Reset element when out of view for reanimation on scroll
                elem.style.opacity = '0';
                
                if (item.animationType === 'fade-left') {
                    elem.style.transform = 'translateX(-50px)';
                } else if (item.animationType === 'fade-right') {
                    elem.style.transform = 'translateX(50px)';
                } else if (item.animationType === 'fade-up') {
                    elem.style.transform = 'translateY(50px)';
                }
                
                // Remove visible class
                elem.classList.remove('visible');
            }
        });
    });
}

// Apply scroll check on scroll event
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Form submission handling
const contactFormEl = document.getElementById('contactForm');
contactFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactFormEl.reset();
});

// Floating tech icons animation
const icons = document.querySelectorAll('.icon');
icons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.5}s`;
});
