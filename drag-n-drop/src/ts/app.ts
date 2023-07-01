import '../scss/style.scss';
import { createTask } from './files/task';
import { updateTasksCounters } from './files/functions';

function start() {
  const createTaskButton = document.querySelector('.todo__create')!;
  const input: HTMLInputElement = document.querySelector('.todo__input')!;

  createTaskButton.addEventListener('click', createTask);
  input.addEventListener('focus', () => (input.placeholder = ''));

  updateTasksCounters();
}

window.onload = () => start();
