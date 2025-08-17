// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const skillLevels = document.querySelectorAll('.skill-level');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Intersection Observer for skill animation
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skill = entry.target;
            const level = skill.getAttribute('data-level');
            skill.style.setProperty('--skill-width', `${level}%`);
        }
    });
}, { threshold: 0.5 });

skillLevels.forEach(skill => skillObserver.observe(skill));

// Scroll reveal animation for sections
const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-revealed');
        }
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

sections.forEach(section => {
    section.classList.add('section--hidden');
    sectionObserver.observe(section);
});

// Add CSS for section reveal animation
if (!document.querySelector('#reveal-styles')) {
    const style = document.createElement('style');
    style.id = 'reveal-styles';
    style.textContent = `
        .section--hidden {
            opacity: 0;
            transform: translateY(8rem);
            transition: all 1s;
        }
        
        .section-revealed {
            opacity: 1;
            transform: translateY(0);
        }
        
        .section-revealed .section-title {
            animation: fadeInUp 0.8s ease;
        }
        
        .section-revealed .skills-container,
        .section-revealed .education-container,
        .section-revealed .projects-container,
        .section-revealed .contact-container {
            animation: fadeInUp 0.8s ease 0.2s both;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Parallax effect for home section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const homeSection = document.querySelector('.home');
    const homeImg = document.querySelector('.home-img img');
    
    if (homeSection && homeImg) {
        const rate = scrolled * -0.5;
        homeImg.style.transform = `translateY(${rate}px)`;
    }
});

// Initialize tooltips for skill items
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const level = item.querySelector('.skill-level').getAttribute('data-level');
        item.setAttribute('title', `${level}% proficiency`);
    });
});

// Smooth scroll to top functionality
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Add scroll to top button when scrolling down
window.addEventListener('scroll', () => {
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (window.scrollY > 500) {
        if (!scrollTopBtn) {
            const btn = document.createElement('button');
            btn.className = 'scroll-top';
            btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            btn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: var(--accent-color);
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                font-size: 18px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                transition: all 0.3s ease;
                z-index: 1000;
            `;
            
            btn.addEventListener('click', scrollToTop);
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'scale(1.1)';
                btn.style.background = 'var(--dark-accent)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'scale(1)';
                btn.style.background = 'var(--accent-color)';
            });
            
            document.body.appendChild(btn);
        }
    } else if (scrollTopBtn) {
        scrollTopBtn.remove();
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Initialize skill levels
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.setProperty('--skill-width', '0%');
    });
    
    console.log('Portfolio website initialized successfully!');
});
