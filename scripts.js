// Change background color when scrolling down
window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Change background color when the viewport width is small or medium
window.addEventListener('resize', function () {
  var navbar = document.getElementById('navbar');
  if (window.innerWidth <= 992) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});




document.addEventListener('DOMContentLoaded', () => {
  const fadeInElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    threshold: 0.5 // Trigger when 50% of the element is visible
  };

  const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing after it becomes visible
      }
    });
  }, observerOptions);

  fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
  });
});


