document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.stars span');
  const form = document.getElementById('feedbackForm');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = parseInt(star.getAttribute('data-value'));

      stars.forEach(s => s.classList.remove('selected'));
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add('selected');
      }

      if (rating <= 3) {
        form.style.display = 'block';
      } else {
        window.location.href = 'https://maps.app.goo.gl/WWB4ZqHCcaKKPsJa8';
      }
    });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Дякуємо за ваш відгук!');
    form.reset();
    form.style.display = 'none';
    stars.forEach(s => s.classList.remove('selected'));
  });
});
