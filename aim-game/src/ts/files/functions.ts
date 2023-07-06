export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

export function nextScreen(screen: HTMLElement): void {
  screen.classList.add('up');
}
