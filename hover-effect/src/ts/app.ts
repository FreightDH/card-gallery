import '../scss/style.scss';
import { removeColor, setColor } from './files/square';
import { SQUARES_COUNT, defaultColor } from './files/variables';

function start(): void {
  const gridBody = document.querySelector('.grid__body')!;

  for (let i = 0; i < SQUARES_COUNT; i++) {
    const square = document.createElement('div');
    square.classList.add('grid__square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square, defaultColor));

    gridBody.appendChild(square);
  }
}

window.onload = (): void => start();
