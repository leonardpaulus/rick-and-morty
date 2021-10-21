import { createElement } from './lib/elements';
import createCharacterCard from './components/characterCard';
import { fetchCharacters } from './components/fetchCharacters';
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

  const characters = await fetchCharacters(
    'https://rickandmortyapi.com/api/character?page='
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

  appElement.append(headerElement, mainElement, footerElement);
}

createApp();
