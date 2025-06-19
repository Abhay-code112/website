document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for nav links
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Form validation and success display
  const form = document.querySelector('.contact-form');
  const successBox = document.getElementById('successBox');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Show custom success message
    successBox.style.display = 'block';

    // Auto-hide after 3 seconds (to match CSS animation)
    setTimeout(() => {
      successBox.style.display = 'none';
    }, 3000);

    form.reset();
  });
});