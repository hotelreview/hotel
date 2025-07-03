
document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', function () {
    const value = parseInt(this.getAttribute('data-value'));
    document.querySelectorAll('.star').forEach(s => {
      s.classList.remove('selected');
    });
    for (let i = 0; i < value; i++) {
      document.querySelectorAll('.star')[i].classList.add('selected');
    }

    if (value <= 3) {
      document.getElementById('feedbackForm').style.display = 'block';
      document.getElementById('feedbackForm').onsubmit = function(e) {
        e.preventDefault();
        const reason = e.target.reason.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const mailto = `mailto:tkebuchava16061991@gmail.com?subject=Негативний відгук (${value}★)&body=Ім'я: ${name}%0AКонтакт: ${email}%0AПричина: ${reason}`;
        window.location.href = mailto;
      }
    } else {
      window.location.href = "https://maps.app.goo.gl/WWB4ZqHCcaKKPsJa8";
    }
  });
});
