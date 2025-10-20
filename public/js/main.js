// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
    }
});

// Animate elements on scroll
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

// Observe all feature cards and steps
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .step');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Creeper face interaction
document.addEventListener('DOMContentLoaded', () => {
    const creeperPixels = document.querySelectorAll('.creeper-pixel');
    creeperPixels.forEach((pixel, index) => {
        pixel.addEventListener('click', () => {
            // Create explosion effect
            pixel.style.background = '#ff4444';
            pixel.style.transform = 'scale(1.5)';
            pixel.style.boxShadow = '0 0 20px #ff4444';
            
            setTimeout(() => {
                pixel.style.background = '';
                pixel.style.transform = '';
                pixel.style.boxShadow = '';
            }, 500);
        });
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Add particle effect to hero section
function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = '#4a5d23';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.opacity = '0.6';
    
    const hero = document.querySelector('.hero');
    if (hero) {
        particle.style.left = Math.random() * hero.offsetWidth + 'px';
        particle.style.top = hero.offsetHeight + 'px';
        hero.appendChild(particle);
        
        const animation = particle.animate([
            { transform: 'translateY(0px) rotate(0deg)', opacity: 0.6 },
            { transform: `translateY(-${hero.offsetHeight + 100}px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: 3000 + Math.random() * 2000,
            easing: 'linear'
        });
        
        animation.onfinish = () => particle.remove();
    }
}

// Create particles periodically
setInterval(createParticle, 2000);

// Add hover effects to buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Resource tab functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const resourceContents = document.querySelectorAll('.resource-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetResource = button.getAttribute('data-resource');
            
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Hide all content sections
            resourceContents.forEach(content => content.classList.add('hidden'));
            // Show target content
            const targetContent = document.getElementById(targetResource + '-content');
            if (targetContent) {
                targetContent.classList.remove('hidden');
            }
        });
    });
});

// Mod category tab functionality
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const modContents = document.querySelectorAll('.mod-content');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetCategory = button.getAttribute('data-category');
            
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Hide all content sections
            modContents.forEach(content => content.classList.add('hidden'));
            // Show target content
            const targetContent = document.getElementById(targetCategory + '-content');
            if (targetContent) {
                targetContent.classList.remove('hidden');
            }
        });
    });
});
