// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or default to user's system preference
const getCurrentTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    return prefersDarkScheme.matches ? 'dark' : 'light';
};

// Apply theme to the document
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update toggle icon
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
        icon.setAttribute('title', 'Switch to light mode');
    } else {
        icon.className = 'fas fa-moon';
        icon.setAttribute('title', 'Switch to dark mode');
    }
};

// Toggle theme
const toggleTheme = () => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
};

// Initialize theme
const initTheme = () => {
    const theme = getCurrentTheme();
    setTheme(theme);
};

// Event listeners
themeToggle.addEventListener('click', toggleTheme);

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

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

// Enhanced Scroll to Top functionality
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Create scroll progress bar
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    return progressBar;
};

// Add scroll to top button and progress bar when scrolling down
window.addEventListener('scroll', () => {
    const scrollTopBtn = document.querySelector('.scroll-top');
    const progressBar = document.querySelector('.scroll-progress') || createScrollProgress();
    
    // Calculate scroll progress
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Update progress bar
    progressBar.style.width = scrollPercent + '%';
    
    if (window.scrollY > 500) {
        if (!scrollTopBtn) {
            const btn = document.createElement('button');
            btn.className = 'scroll-top';
            btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            btn.setAttribute('aria-label', 'Scroll to top');
            
            btn.addEventListener('click', scrollToTop);
            
            document.body.appendChild(btn);
            
            // Add visible class after a small delay for animation
            setTimeout(() => {
                btn.classList.add('visible');
            }, 100);
        }
    } else if (scrollTopBtn) {
        scrollTopBtn.classList.remove('visible');
        setTimeout(() => {
            if (scrollTopBtn.parentNode) {
                scrollTopBtn.remove();
            }
        }, 400);
    }
    
    // Hide progress bar when at top
    if (scrollTop === 0) {
        progressBar.style.width = '0%';
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
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
