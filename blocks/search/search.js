setTimeout(() => {
  const formElement = document.getElementById('search');
  const searchForm = document.querySelector('.search-filter');
  if (searchForm) {
    searchForm.removeAttribute('data-action');
    searchForm.setAttribute('method', 'get');
    // eslint-disable-next-line no-script-url
    searchForm.setAttribute('action', 'http://google.com/search');
  }
  formElement.setAttribute('name', 'q');
  formElement.setAttribute('autocomplete', 'off');
}, 1500);
