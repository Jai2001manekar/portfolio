// Vanta.js Background
document.addEventListener('DOMContentLoaded', () => {
  if (window.VANTA) {
    VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x00ffff,
      backgroundColor: 0x0d0d0d,
      points: 8.00,
      maxDistance: 25.00,
      spacing: 15.00
    });
  }

  // Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      navLinks.classList.remove('active');
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Counter Animation
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector('#about'));

  // Form Submission (Prevent default for demo)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your message has been sent.');
      form.reset();
    });
  }

  // Optional: Typing Effect for Tagline (Commented for now)
  
  const text = "Turning Code into Impact | Building the Future with Java, SQL & Android.";
  const tagline = document.getElementById('dynamic-tagline');
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      tagline.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter();
  
});