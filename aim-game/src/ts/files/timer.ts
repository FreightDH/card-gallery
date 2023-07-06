import { score } from '../app';
import { board } from './variables';

class Timer {
  public isFinish: boolean;

  constructor(public time: number) {
    this.time = time;
    this.isFinish = false;
  }

  setTime(): void {
    const currentTime = document.querySelector('.time')!;
    currentTime.textContent = `${this.time}`;
  }

  updateTime(): void {
    if (this.time > 0) {
      this.time--;
      this.setTime();
    } else {
      this.isFinish = true;
      this.finish();
    }
  }

  start(): void {
    const timer = setInterval(() => {
      if (!this.isFinish) this.updateTime();
      else clearInterval(timer);
    }, 1000);
  }

  finish() {
    board.innerHTML = `<h2 class="screen__title">Score: ${score}</h2>`;
  }
}

export default Timer;
