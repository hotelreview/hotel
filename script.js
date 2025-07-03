const stars = document.querySelectorAll("#stars span");
const form = document.getElementById("feedback-form");
let selectedRating = 0;

stars.forEach((star) => {
  star.addEventListener("mouseover", () => {
    highlightStars(star.dataset.value);
  });

  star.addEventListener("mouseout", () => {
    highlightStars(selectedRating);
  });

  star.addEventListener("click", () => {
    selectedRating = parseInt(star.dataset.value);
    highlightStars(selectedRating);

    if (selectedRating <= 3) {
      form.style.display = "flex";
    } else {
      window.location.href =
        "https://www.google.com/maps/place/Sushi+Wroc%C5%82aw,+Restauracja+Sushi+Wroc%C5%82aw+-+BO+Sushi+we+Wroc%C5%82awiu/@51.1111621,17.0199513,17z/data=!4m8!3m7!1s0x470fc3c65c6743a1:0xa337ce2f6423d5ae!8m2!3d51.1111621!4d17.0199513!9m1!1b1!16s%2Fg%2F11vzcln53l?entry=ttu";
    }
  });
});

function highlightStars(value) {
  stars.forEach((star) => {
    star.classList.remove("selected");
    if (parseInt(star.dataset.value) <= value) {
      star.classList.add("selected");
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const body = `
    Проблема: ${data.get("problem")}
    Ім'я: ${data.get("name")}
    Контакт: ${data.get("contact")}
  `;
  window.location.href = `mailto:tkebuchava16061991@gmail.com?subject=Відгук (1-3 зірки)&body=${encodeURIComponent(body)}`;
});