// Loading Screen Handler
window.addEventListener('load', () => {
    // Ensure all content is loaded
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.classList.add('fade-out');
        
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
        
        // Initialize other animations
        initializeAnimations();
    }, 1500);
});

// Professional scroll-based animations
function initializeAnimations() {
    const animatedElements = document.querySelectorAll(
        '.hero-content, .project-card, .skill-card, .timeline-year'
    );
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Add stagger effect for project and skill cards
                if (entry.target.classList.contains('project-card') || 
                    entry.target.classList.contains('skill-card')) {
                    const delay = Array.from(entry.target.parentElement.children)
                        .indexOf(entry.target) * 0.2;
                    entry.target.style.transitionDelay = `${delay}s`;
                }
            }
        });
    }, {
        threshold: 0.2
    });
    
    animatedElements.forEach(element => observer.observe(element));
}

// Smooth cursor trailer effect
const cursor = document.createElement('div');
cursor.className = 'cursor-trailer';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll(
    'a, button, .project-card, .skill-card'
);

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
    });
});

// Professional scroll progress indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add/remove scrolled class
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animate links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Smooth scrolling with offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 100;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Enhanced scroll animations with intersection observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('skill-card')) {
                const progressBar = entry.target.querySelector('.progress');
                const width = entry.target.querySelector('.progress').style.width;
                progressBar.style.setProperty('--progress-width', width);
                
                // Add floating animation to icon with delay
                const icon = entry.target.querySelector('i');
                if (icon) {
                    icon.style.animationDelay = `${Math.random() * 0.5}s`;
                }
            }
        }
    });
}, observerOptions);

// Observe all sections and skill cards
document.querySelectorAll('section, .skill-card').forEach(element => {
    observer.observe(element);
});

// Skill bars animation
function animateSkillBar(card) {
    const progressBar = card.querySelector('.progress');
    if (progressBar) {
        const width = progressBar.style.width;
        progressBar.style.width = '0';
        setTimeout(() => {
            progressBar.style.width = width;
        }, 100);
    }
}

// Enhanced typing animation for hero section
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init typing animation on load
window.addEventListener('load', init);

function init() {
    const txtElement = document.querySelector('.hero-content p');
    const words = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'];
    new TypeWriter(txtElement, words);
}

// Parallax effect with smoother animation
window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        hero.style.backgroundPositionY = `${rate}px`;
    });
});

// Form validation and submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    
    try {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Add your form submission logic here
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated delay
        
        showNotification('Thank you for your message! I will get back to you soon.', 'success');
        contactForm.reset();
    } catch (error) {
        showNotification('Something went wrong. Please try again.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
});

// Notification system
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add active class to navigation links on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Robot animation and typing effect
document.addEventListener('DOMContentLoaded', () => {
    const text = "Hi, I'm Ahin\nSatheesh From India";
    const typingText = document.querySelector('.typing-text');
    const robotBubble = document.querySelector('.robot-text-bubble p');
    const robotCharacter = document.querySelector('.robot-character');
    
    // Reset initial state
    typingText.textContent = '';
    robotCharacter.style.animation = 'none';
    robotCharacter.offsetHeight; // Trigger reflow
    robotCharacter.style.animation = null;
    
    // Start the animation sequence
    setTimeout(() => {
        robotBubble.textContent = "Let me type that for you!";
        setTimeout(() => {
            typeText(text, typingText);
        }, 1500);
    }, 1000);
});

function typeText(text, element) {
    let index = 0;
    let currentText = '';
    const speed = 100; // Typing speed in milliseconds

    function type() {
        if (index < text.length) {
            if (text[index] === '\n') {
                currentText += '<br>';
            } else {
                currentText += text[index];
            }
            element.innerHTML = currentText + '<span class="cursor">|</span>';
            index++;
            setTimeout(type, speed);
        } else {
            // Animation complete
            setTimeout(() => {
                const robotCharacter = document.querySelector('.robot-character');
                robotCharacter.style.animation = 'robotExit 1s ease forwards';
            }, 1000);
        }
    }

    type();
}

// Add cursor animation style
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
.cursor {
    display: inline-block;
    animation: blink 0.7s infinite;
}

.typing-text {
    display: inline-block;
    min-width: 20px;
    min-height: 1.2em;
    position: relative;
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 1.2;
    color: #F8F8F2;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}`;
document.head.appendChild(cursorStyle);

// Add robot exit animation
const style = document.createElement('style');
style.textContent = `
@keyframes robotExit {
    0% {
        opacity: 1;
        transform: translate(0, -50%);
    }
    100% {
        opacity: 0;
        transform: translate(-100px, -50%);
    }
}`;
document.head.appendChild(style);

// Smooth scrolling for View Work button
document.querySelector('.secondary-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const projectsSection = document.querySelector('#projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
}); 
