import { createElement } from './lib/elements';
import createCharacterCard from './components/characterCard';
import { fetchCharacters } from './components/fetchCharacters';
import { createSearchBar } from './components/searchBar';
import './style.css';

async function createApp() {
  const appElement = document.querySelector('#app');

  const headerElement = createElement(
    'header',
    {
      className: 'header',
    },
    [
      createElement('h1', {
        textContent: 'The Rick and Morty API',
      }),
    ]
  );

  const searchBar = createSearchBar(handleSubmit);

  async function handleSubmit(searchQuery) {
    const url = 'https://rickandmortyapi.com/api/character/?name=';
    const charactersSearch = await fetchCharacters(url + searchQuery);
    const searchCards = charactersSearch.map((characterSearch) =>
      createCharacterCard(characterSearch)
    );
    mainElement.innerHTML = '';
    mainElement.prepend(...searchCards);
  }

  const characters = await fetchCharacters(
    'https://rickandmortyapi.com/api/character'
  );

  const characterCards = characters.map((character) =>
    createCharacterCard(character)
  );

  const mainElement = createElement(
    'main',
    {
      className: 'main',
    },
    [
      createElement(
        'section',
        {
          className: 'cards',
        },
        characterCards
      ),
    ]
  );

  const footerElement = createElement(
    'footer',
    {
      className: 'footer',
    },
    [
      createElement('p', {
        textContent: 'Created by Leo Paulus',
      }),
    ]
  );

  appElement.append(headerElement, searchBar, mainElement, footerElement);
}

createApp();
