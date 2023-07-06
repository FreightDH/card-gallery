import { getRandomColor } from './functions';

export function setColor(square: HTMLElement): void {
  const color = getRandomColor();
  square.style.backgroundColor = `${color}`;
  square.style.boxShadow = `0 0 2px ${color}`;
}

export function removeColor(square: HTMLElement, defaultColor: string = '#1d1d1d'): void {
  square.style.backgroundColor = `${defaultColor}`;
  square.style.boxShadow = `0 0 2px ${defaultColor}`;
}
