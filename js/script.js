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
      color: 0xffd700,        // Royal gold
      backgroundColor: 0x0a0a2a, // Deep royal blue
      points: 20.00,          // Dense network for richness
      maxDistance: 30.00,     // Strong 3D connections
      spacing: 12.00,         // Tight spacing for depth
      showDots: true,
      dotColor: 0xffd700,     // Gold dots
      lineColor: 0xffd700,    // Gold lines
      backgroundColor: 0x000022, // Deep navy foundation
      cameraDistance: 80.00,  // Dramatic 3D perspective
      rotationSpeed: 1.00,    // Regal rotation
      waveSpeed: 0.5,
      waveHeight: 10.00,      // Pronounced 3D waves
      zoom: 0.8,              // Zoomed out for grand scale
      scale: 2.00,            // Larger scale for presence
      scaleMobile: 2.50,
      animationSpeed: 2.00,   // Dynamic movement
      maxDistance: 35.00,     // Long connections for depth
      spacing: 10.00,         // Dense royal tapestry
      showDots: true,
      dotColor: 0xffd700,
      lineColor: 0xc0a050,    // Secondary gold tone
      size: 2.00,             // Bold lines
      damping: 0.90,          // Smooth physics
      stiffness: 0.20,        // Elegant tension
      material: {
        color: 0xffd700,
        roughness: 0.3,
        metalness: 0.9        // Metallic gold shine
      }
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
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

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
      tagline.innerHTML = text.substring(0, i + 1) + '<span class="cursor"> </span>';
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter();
  
});