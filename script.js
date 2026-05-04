const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
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

document.querySelectorAll('.animate').forEach(el => {
  observer.observe(el);
});
