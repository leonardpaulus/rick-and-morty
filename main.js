import { createElement } from './lib/elements';
import createCharacterCard from './components/characterCard';
import './style.css';

function createApp() {
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
        [
          createCharacterCard({
            image: 'https://rickandmortyapi.com/api/character/avatar/165.jpeg',
            name: 'Rick',
            status: 'Alive',
            location: 'Mars',
            appearance: 'The Ricklantis Mixup',
          }),
          createCharacterCard({
            image: 'https://rickandmortyapi.com/api/character/avatar/200.jpeg',
            name: 'Morty',
            status: 'Dead',
            location: 'Earth',
            appearance: 'Pilot',
          }),
        ]
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
