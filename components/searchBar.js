import { createElement } from '../lib/elements.js';
import styles from './searchBar.module.css';

export function createSearchBar(onSearch) {
  const searchInput = createElement('input', {
    className: styles.searchInput,
    type: 'text',
    required: true,
    placeholder: 'Are you looking for a Character?',
  });

  const searchButton = createElement(
    'button',
    {
      className: styles.searchButton,
      type: 'submit',
    },
    ['🔍']
  );

  const searchBar = createElement(
    'form',
    {
      className: styles.searchBar,
      onsubmit: function (event) {
        event.preventDefault();
        onSearch(searchInput.value);
        searchInput.value = '';
      },
    },
    [searchInput, searchButton]
  );

  return searchBar;
}
