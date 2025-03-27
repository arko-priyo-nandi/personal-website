// Responsive Navbar
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('toggle');
});

// Smooth Scrolling
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Interactive Buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Responsive Hero Section
window.addEventListener('resize', () => {
    const hero = document.querySelector('.hero');
    if (window.innerWidth < 768) {
        hero.style.height = 'auto';
    } else {
        hero.style.height = '100vh';
    }
});

// Close mobile menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            hamburger.classList.remove('toggle');
        }
    });
});

// Reveal elements on scroll
const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
    const triggerBottom = window.innerHeight * 0.8;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', checkReveal);

// Adjust skill items layout based on screen size
function adjustSkillItems() {
    const skillItems = document.querySelectorAll('.skill-items');
    
    if (window.innerWidth < 576) {
        skillItems.forEach(item => {
            item.style.flexDirection = 'column';
        });
    } else {
        skillItems.forEach(item => {
            item.style.flexDirection = 'row';
        });
    }
}

window.addEventListener('load', adjustSkillItems);
window.addEventListener('resize', adjustSkillItems);