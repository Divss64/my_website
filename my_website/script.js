document.addEventListener("DOMContentLoaded", function () {
  // Resume Modal Logic
  const viewBtn = document.getElementById("viewResumeBtn");
  const modal = document.getElementById("resumeModal");
  const closeBtn = document.getElementById("closeResumeBtn");

  viewBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Scroll Animation for Profile Photo
  const photoSection = document.getElementById("photoSection");

  window.addEventListener("scroll", () => {
    const photoTop = photoSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (photoTop < windowHeight - 100) {
      photoSection.classList.add("show");
    }
  });

  // Scroll Animation for .animate-on-scroll Elements (fade in and out)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-in');
      } else {
        entry.target.classList.remove('scroll-in');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
window.addEventListener('scroll', function () {
  document.querySelectorAll('.animate-on-scroll, .poster-gallery').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('scroll-in');
    }
  });
});

