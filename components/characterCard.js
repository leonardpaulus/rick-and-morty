import { createElement } from '../lib/elements';
import styles from './characterCard.module.css';

export default function createCharacterCard({
  image,
  name,
  status,
  species,
  episode,
  origin,
}) {
  const firstEpisodeElement = createElement('p', {
    className: styles.text,
    textContent: 'Loading...',
  });

  const firstEpisode = episode[0];

  const characterCard = createElement(
    'article',
    {
      className: styles.card,
    },
    [
      createElement(
        'div',
        {
          className: styles.imageDiv,
        },
        [
          createElement(
            'img',
            {
              className: styles.image,
              src: image,
            },
            []
          ),
        ]
      ),
      createElement('div', { className: styles.textWrapper }, [
        createElement('div', { className: styles.textDiv }, [
          createElement('h2', {
            className: styles.characterName,
            textContent: name,
          }),
          createElement('p', {
            className: styles.status,
            textContent: `${status} - ${species}`,
          }),
        ]),
        createElement('div', { className: styles.textDiv }, [
          createElement('h3', {
            className: styles.heading,
            textContent: 'Last known location:',
          }),
          createElement('p', {
            className: styles.text,
            textContent: origin.name,
          }),
        ]),
        createElement('div', { className: styles.textDiv }, [
          createElement('h3', {
            className: styles.heading,
            textContent: 'First seen in:',
          }),
          firstEpisodeElement,
        ]),
      ]),
    ]
  );

  fetch(firstEpisode)
    .then((response) => response.json())
    .then((body) => {
      firstEpisodeElement.textContent = body.name;
    });

  return characterCard;
}
