import { createElement } from './lib/elements';
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
          createElement('p', {
            className: 'maintext',
            textContent: 'In development...',
          }),
        ]
      ),
    ]
  );

  appElement.append(headerElement, mainElement);
}

createApp();
