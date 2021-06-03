document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.js-toggle-menu');
  const overlay = document.querySelector('#js-overlay-navigation');
  buttons.forEach((b) => {
    b.addEventListener('click', () => {
      overlay.classList.toggle('active');
    });
  });
});
