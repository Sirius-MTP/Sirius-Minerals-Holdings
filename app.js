/* Sirius Minerals Holdings - global JS */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Active nav link highlight by URL
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (href === 'index.html' && path === '')) {
      a.classList.add('active');
    }
  });

  // Simple form handler (demo)
  const forms = document.querySelectorAll('form[data-demo]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true; btn.innerText = 'Submitting...';
      setTimeout(() => {
        alert('Thanks! Your submission has been received.\n(This is a demo handler – wire it to your backend.)');
        form.reset();
        btn.disabled = false; btn.innerText = form.dataset.ctaLabel || 'Submit';
      }, 1200);
    });
  });

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
      }
    });
  });
});