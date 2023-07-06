import '../scss/style.scss';
import { nextScreen } from './files/functions';
import { board, boardOptions } from './files/variables';
import { createCircle } from './files/circle';
import Timer from './files/timer';

export let score = 0;

function start(): void {
  const startButton = document.querySelector('.button--start')!;
  const timeContainer = document.querySelector('.screen__time')!;

  startButton.addEventListener('click', () => {
    const currentScreen: HTMLElement = document.querySelector('.screen--start')!;
    nextScreen(currentScreen);
  });

  timeContainer.addEventListener('click', (event) => {
    const currentScreen: HTMLElement = document.querySelector('.screen--time')!;
    const button = event.target as HTMLElement;
    const selectedTime = parseInt(button.dataset.time!);

    nextScreen(currentScreen);
    startGame(selectedTime);
  });
}

function startGame(time: number): void {
  const timer = new Timer(time);

  timer.setTime();
  timer.start();
  createCircle(boardOptions.width, boardOptions.height);

  board.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    if (target.closest('.circle')) {
      score++;
      target.classList.add('hide');
      createCircle(boardOptions.width, boardOptions.height);
    }
  });
}

window.onload = () => start();
