const themeToggle = document.querySelector('.theme-toggle');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const form = document.getElementById('contact-form');
const icon = themeToggle.querySelector('i');

const storedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', storedTheme);
icon.className = storedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  icon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('.btn');
  const original = btn.textContent;
  btn.textContent = 'Message Sent!';
  btn.style.pointerEvents = 'none';
  form.reset();
  setTimeout(() => {
    btn.textContent = original;
    btn.style.pointerEvents = 'auto';
  }, 3000);
});
