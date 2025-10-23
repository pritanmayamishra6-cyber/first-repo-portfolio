document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".sidebar nav a");
  const sections = document.querySelectorAll("section");

  // --- NAVIGATION HANDLER ---
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      // Remove active-link from all
      navLinks.forEach(nav => nav.classList.remove("active-link"));
      link.classList.add("active-link");

      // Smooth fade-out of current section
      const activeSection = document.querySelector("section.active");
      if (activeSection) {
        activeSection.classList.remove("active");
        setTimeout(() => {
          const target = link.getAttribute("href").substring(1);
          sections.forEach(sec => sec.classList.remove("active"));
          document.getElementById(target).classList.add("active");
        }, 300);
      } else {
        const target = link.getAttribute("href").substring(1);
        document.getElementById(target).classList.add("active");
      }
    });
  });

  // --- LIGHTBOX HANDLER ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("closeBtn");

  document.querySelectorAll(".gallery img, .home-gallery img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
