import '../scss/style.scss';
import { setImages } from './files/images';

function start(): void {
  const cards = document.querySelectorAll('.cards__slide');
  const input: HTMLInputElement = document.querySelector('.change__input')!;
  input.value = 'audi';

  setImages();

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    if (input.classList.contains('active') && !target.closest('.change__input') && !target.closest('.change__button')) {
      input.classList.remove('active');
    }

    if (target.closest('.cards__slide')) {
      cards.forEach((card) => {
        card.classList.remove('active');
      });

      target.classList.add('active');
    }

    if (target.closest('.change__button')) {
      input.classList.toggle('active');
    }
  });

  input.addEventListener('change', () => {
    input.classList.remove('active');
    setImages(input.value);
  });
}

window.onload = (): void => start();
