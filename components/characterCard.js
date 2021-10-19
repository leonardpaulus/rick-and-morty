import { createElement } from '../lib/elements';
import styles from './characterCard.module.css';

export default function createCharacterCard({
  image,
  name,
  status,
  location,
  appearance,
}) {
  const characterCard = createElement(
    'article',
    {
      className: styles.card,
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
      createElement('div', { className: styles.textWrapper }, [
        createElement('div', { className: styles.textDiv }, [
          createElement('h2', {
            className: styles.characterName,
            textContent: name,
          }),
          createElement('p', {
            className: styles.status,
            textContent: status,
          }),
        ]),
        createElement('div', { className: styles.textDiv }, [
          createElement('h3', {
            className: styles.heading,
            textContent: 'Last known location:',
          }),
          createElement('p', {
            className: styles.text,
            textContent: location,
          }),
        ]),
        createElement('div', { className: styles.textDiv }, [
          createElement('h3', {
            className: styles.heading,
            textContent: 'First seen in:',
          }),
          createElement('p', {
            className: styles.text,
            textContent: appearance,
          }),
        ]),
      ]),
    ]
  );
  return characterCard;
}
