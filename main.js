import { createElement } from './lib/elements';
import createCharacterCard from './components/characterCard';
import './style.css';

async function createApp() {
  const appElement = document.querySelector('#app');

  const randomPage = Math.floor(Math.random() * 34) + 1;
  console.log(randomPage);
  const url = 'https://rickandmortyapi.com/api/character?page=';

  const response = await fetch(url + randomPage);
  const body = await response.json();
  const characters = body.results;

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
  /* 
  const characters = [
    {
      image: 'https://rickandmortyapi.com/api/character/avatar/165.jpeg',
      name: 'Rick',
      status: 'Alive',
      location: 'Mars',
      appearance: 'The Ricklantis Mixup',
    },
    {
      image: 'https://rickandmortyapi.com/api/character/avatar/200.jpeg',
      name: 'Morty',
      status: 'Dead',
      location: 'Earth',
      appearance: 'Pilot',
    },
  ];
*/
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
