
const navToggle = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

document.querySelector('.nav__toggle').addEventListener('click', () => {
    navToggle.classList.toggle('show-menu');
});

navClose.addEventListener('click', () => {
    navToggle.classList.remove('show-menu');
});


const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const scrollUp = document.getElementById('scroll-up');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
});

// Scroll to Top
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
