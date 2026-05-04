const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      if (el.classList.contains('fade-in-up')) {
        el.style.animation = 'fadeInUp 0.8s ease forwards';
      } else if (el.classList.contains('slide-in-left')) {
        el.style.animation = 'slideInLeft 0.8s ease forwards';
      } else if (el.classList.contains('scale-in')) {
        el.style.animation = 'scaleIn 0.7s ease forwards';
      }
      el.style.opacity = 1;
      observer.unobserve(el);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate').forEach(el => observer.observe(el));

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navCta = document.querySelector('.nav-cta');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.cssText = isOpen ? '' : 'display:flex;flex-direction:column;position:fixed;top:72px;left:0;right:0;background:#0a0a0a;padding:24px 32px;gap:20px;border-bottom:1px solid #1c1c1c;z-index:99;';
    navCta.style.display = isOpen ? '' : 'none';
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (navLinks.style.display === 'flex') {
        navLinks.style.cssText = '';
      }
    }
  });
});
