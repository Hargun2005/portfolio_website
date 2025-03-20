document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");
  const navbarLinks = document.querySelectorAll(".projects-navbar a");
  const educationBtn = document.getElementById("education-btn");
  const workBtn = document.getElementById("work-btn");
  const educationSection = document.getElementById("education-section");
  const workSection = document.getElementById("work-section");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const filter = this.id.replace("-projects", "").toUpperCase();

      projectCards.forEach((card) => {
        if (filter === "ALL") {
          card.style.display = "flex"; // Use flex instead of block
        } else {
          card.style.display =
            card.getAttribute("data-tags").toUpperCase() === filter
              ? "flex" // Use flex instead of block
              : "none";
        }
      });

      navbarLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });

  educationBtn.addEventListener("click", function () {
    educationSection.classList.remove("hidden");
    workSection.classList.add("hidden");
    educationBtn.classList.add("active");
    workBtn.classList.remove("active");
  });

  workBtn.addEventListener("click", function () {
    workSection.classList.remove("hidden");
    educationSection.classList.add("hidden");
    workBtn.classList.add("active");
    educationBtn.classList.remove("active");
  });
});
