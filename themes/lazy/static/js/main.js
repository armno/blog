(function() {
  function appendAnchor(element) {
    const a = document.createElement('a');
    const currentURL = document.location.href;
    a.classList.add('heading-anchor');
    a.setAttribute('href', currentURL + '#' + element.id);
    a.textContent = '#';

    element.classList.add('heading-linked');
    element.appendChild(a);
  }
  document.addEventListener('DOMContentLoaded', () => {
    mediumZoom('img:not(.no-medium-zoom)');

    document
      .querySelectorAll('h2, h3')
      .forEach(element => appendAnchor(element));
  });
})();
