import { getRandomInt } from './functions';
import { board } from './variables';

export function createCircle(boardWidth: number, boardHeight: number) {
  const circle = document.createElement('div');
  const size = getRandomInt(10, 60);
  const position = {
    x: getRandomInt(0, boardWidth - size),
    y: getRandomInt(0, boardHeight - size),
  };

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${position.x}px`;
  circle.style.left = `${position.y}px`;

  board.append(circle);
}
