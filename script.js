document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".stars span");
  const form = document.getElementById("feedbackForm");

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const rating = parseInt(star.getAttribute("data-value"));
      stars.forEach((s, i) => {
        s.classList.toggle("selected", i < rating);
      });
      if (rating <= 3) {
        form.style.display = "block";
      } else {
        window.location.href = "https://maps.app.goo.gl/WWB4ZqHCcaKKPsJa8";
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Дякуємо за відгук!");
    form.reset();
    form.style.display = "none";
    stars.forEach(s => s.classList.remove("selected"));
  });
});