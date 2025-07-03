const stars = document.querySelectorAll("#stars span");
let selectedValue = 0;

stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    stars.forEach((s, i) => {
      s.classList.toggle("hover", i <= index);
    });
  });

  star.addEventListener("mouseout", () => {
    stars.forEach((s, i) => {
      s.classList.toggle("hover", false);
    });
  });

  star.addEventListener("click", () => {
    selectedValue = parseInt(star.dataset.value);
    stars.forEach((s, i) => {
      s.classList.toggle("selected", i < selectedValue);
    });

    setTimeout(() => {
      if (selectedValue >= 4) {
        window.location.href = "https://maps.app.goo.gl/WWB4ZqHCcaKKPsJa8";
      } else {
        window.location.href = "mailto:tkebuchava16061991@gmail.com?subject=Отзыв%20об%20отеле";
      }
    }, 1000);
  });
});
