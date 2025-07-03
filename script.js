const stars = document.querySelectorAll(".stars span");
const form = document.getElementById("feedback-form");
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener("click", () => {
    selectedRating = parseInt(star.dataset.value);
    highlightStars(selectedRating);

    if (selectedRating <= 3) {
      form.style.display = "flex";
    } else {
      window.location.href = "https://maps.app.goo.gl/WWB4ZqHCcaKKPsJa8";
    }
  });
});

function highlightStars(rating) {
  stars.forEach(star => {
    star.classList.remove("selected");
    if (parseInt(star.dataset.value) <= rating) {
      star.classList.add("selected");
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const reason = document.getElementById("reason").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const body = `Причина: ${reason}%0AІм'я: ${name}%0AКонтакт: ${email}`;
  window.location.href = `mailto:tkebuchava16061991@gmail.com?subject=Негативний відгук (1-3 зірки)&body=${body}`;
});