// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active navigation link on scroll
    window.addEventListener('scroll', function() {
        const scrollPos = window.scrollY + 100;
        
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });
});

// Utility function for smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Interactive button animations
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.learning-card, .phase-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Fun interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Make stat numbers count up on scroll
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const animateStats = () => {
        if (hasAnimated) return;
        
        statNumbers.forEach(stat => {
            const finalValue = stat.textContent;
            let currentValue = 0;
            const increment = finalValue.includes('-') ? 1 : Math.ceil(finalValue / 20);
            
            const timer = setInterval(() => {
                if (finalValue.includes('-')) {
                    const parts = finalValue.split('-');
                    const min = parseInt(parts[0]);
                    const max = parseInt(parts[1]);
                    stat.textContent = `${min}-${max}`;
                    clearInterval(timer);
                } else {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        currentValue = finalValue;
                        clearInterval(timer);
                    }
                    stat.textContent = currentValue;
                }
            }, 50);
        });
        
        hasAnimated = true;
    };
    
    const statsSection = document.querySelector('.hero-stats');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
            }
        });
    }, { threshold: 0.5 });
    
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Add some fun cursor effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.learning-card, .phase-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
        });
    });
});

// Console welcome message
console.log(`
🚀 Welcome to Code Creators!
Ready to build amazing apps? Let's go! ✨
`);

// Curriculum tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const phaseContents = document.querySelectorAll('.phase-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPhase = this.getAttribute('data-phase');
            
            // Remove active class from all tabs and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            phaseContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.querySelector(`.phase-content[data-phase="${targetPhase}"]`).classList.add('active');
        });
    });
});

// Project cards interaction
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a pulse animation
            this.style.animation = 'pulse 0.3s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    });
});

// Enhanced scroll animations for new sections
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.learning-card, .phase-card, .session-card, .project-card, .resource-category');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Add pulse animation keyframe
const pulseCSS = `
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}
`;

// Inject the CSS
const style = document.createElement('style');
style.textContent = pulseCSS;
document.head.appendChild(style);