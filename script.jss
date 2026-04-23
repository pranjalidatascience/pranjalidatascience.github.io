// simple scroll animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

document.addEventListener("keydown", function(e) {
  if (e.key === "d") {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  }
});

// Inject consulting-style metrics into hero
window.addEventListener("load", () => {
  const hero = document.querySelector(".s-intro .row");

  if (hero) {
    const metrics = document.createElement("div");
    metrics.className = "metric-strip";

    metrics.innerHTML = `
      <div class="metric">5+<span>AI & Data Science Projects</span></div>
      <div class="metric">3.9 GPA<span>Data Science & Finance</span></div>
      <div class="metric">4 Domains<span>AI, GIS, Finance, Policy</span></div>
    `;

    hero.appendChild(metrics);
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".card").forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(40px)";
  observer.observe(card);
});