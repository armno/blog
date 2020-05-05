(function () {
  document.addEventListener('DOMContentLoaded', function () {
    createAnchorLinks();
    observeComments();
    initMobileMenu();

    document.querySelector('html').classList.remove('no-js');
  });

  function appendAnchor(element) {
    const a = document.createElement('a');
    const currentURL = document.location.href;
    a.classList.add('heading-anchor');
    a.setAttribute('href', currentURL + '#' + element.id);
    a.textContent = '#';

    element.classList.add('heading-linked');
    element.appendChild(a);
  }

  function createAnchorLinks() {
    const articles = document.querySelector('article.single');
    if (!articles) {
      return;
    }

    articles.querySelectorAll('h2, h3').forEach(function (element) {
      appendAnchor(element);
    });
  }

  function observeComments() {
    const commentsElement = document.querySelector('#comments');
    if (!commentsElement) {
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: '250px 0px 0px',
      threshold: 0,
    };

    const pageURL = commentsElement.getAttribute('data-page-url');
    const identifier = commentsElement.getAttribute('data-identifier');

    const observer = new IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadDisqus(pageURL, identifier);
          self.unobserve(commentsElement);
        }
      });
    }, observerOptions);

    observer.observe(commentsElement);
  }

  function loadDisqus(pageURL, id) {
    window.disqus_config = function () {
      this.page.url = pageURL;
      this.page.identifier = id;
    };

    (function () {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement('script');
      s.src = 'https://armnointh.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }

  function initMobileMenu() {
    const openButton = document.querySelector('#button-open-menu');
    if (openButton) {
      openButton.addEventListener('click', openMenu);
    }

    const closeButton = document.querySelector('#button-close-menu');
    if (closeButton) {
      closeButton.addEventListener('click', closeMenu);
    }
  }

  function openMenu() {
    document.body.classList.add('menu-active');
  }

  function closeMenu() {
    document.body.classList.remove('menu-active');
  }
})();
