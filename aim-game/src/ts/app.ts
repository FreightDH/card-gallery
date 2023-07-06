import '../scss/style.scss';

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

  startGame(11);
}

function nextScreen(screen: HTMLElement): void {
  screen.classList.add('up');
}

function startGame(time: number): void {
  const currentTime = document.querySelector('.time')!;

  setInterval(() => {
    currentTime.textContent = `${time}`;
    if (time !== 0) time--;
  }, 1000);

  const board = document.querySelector('.game__board')!;
  const boardOptions = board.getBoundingClientRect();
  const boardWidth = boardOptions.width;
  const boardHeight = boardOptions.height;

  let circle = createCircle(boardWidth, boardHeight);
  let score = 0;

  board.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    if (target.closest('.circle')) {
      score++;
      target.classList.add('hide');
      circle = createCircle(boardWidth, boardHeight);
      board.append(circle);
    }
  });

  board.append(circle);

  if (time === 0) {
    board.textContent = `${score}`;
  }
}

function createCircle(boardWidth: number, boardHeight: number) {
  const circle = document.createElement('div');
  const size = getRandomInt(10, 60);
  const x = getRandomInt(0, boardWidth - size);
  const y = getRandomInt(0, boardHeight - size);

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${x}px`;
  circle.style.left = `${y}px`;

  return circle;
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

window.onload = () => start();
