import { setImages } from './files/images';

function start(): void {
  const cards = document.querySelectorAll('.cards__slide');

  setImages();

  document.addEventListener('click', (event) => {
    const currentCard = event.target as HTMLElement;

    cards.forEach((card) => {
      card.classList.remove('active');
    });

    currentCard.classList.add('active');
  });
}

window.onload = (): void => start();
