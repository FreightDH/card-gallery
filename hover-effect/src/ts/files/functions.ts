import { colorsArray } from './variables';

export function getRandomColor(): string {
  const min = 0;
  const max = colorsArray.length;
  const colorIndex = Math.floor(Math.random() * (max - min) + min);

  return colorsArray[colorIndex];
}
