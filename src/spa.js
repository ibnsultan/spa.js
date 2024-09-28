document.addEventListener('DOMContentLoaded', () => {
  
  // intercept and bind clicks and prevent full page reload
  function bindLinks() {
    document.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href');
      if (isValidLink(href)) {
        link.addEventListener('click', function(event) {
          event.preventDefault();
          const url = this.getAttribute('href');
          history.pushState(null, '', url);
          loadPage(url);
        });
      }
    });
  }

  // validate links
  function isValidLink(link) {
    return link &&
      !link.startsWith('#') &&
      !link.startsWith('javascript') &&
      !link.startsWith('http') && // Ignore external HTTP requests
      !link.startsWith('//') && // Ignore protocol-relative URLs
      !link.includes('target="_blank"'); // Ignore links with target="_blank"
  }

  // Function to fetch the page and replace only the #content
  function loadPage(url) {
    fetch(url)
      .then(response => response.text())
      .then(html => {
        // Parse the full HTML document from the response
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Extract the #content from the fetched page
        const newContent = doc.querySelector('#content').innerHTML;

        // Replace current #content with the new content
        document.querySelector('#content').innerHTML = newContent;

        // Update the page title
        const newTitle = doc.querySelector('title').innerText;
        document.title = newTitle;

        // Re-bind the new links in the fetched content
        bindLinks();
      })
      .catch(error => console.error('Failed to load page:', error));
  }

  // Handle browser back/forward navigation with popstate event
  window.addEventListener('popstate', () => {
    loadPage(location.pathname);
  });

  // initialize
  bindLinks();
});
