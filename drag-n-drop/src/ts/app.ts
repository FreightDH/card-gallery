import '../scss/style.scss';
import { createTask } from './files/task';
import { setDragDropEvents, updateTasksCounters } from './files/functions';

function start(): void {
  const createTaskButton = document.querySelector('.todo__create')!;
  const input: HTMLInputElement = document.querySelector('.todo__input')!;

  createTaskButton.addEventListener('click', createTask);

  input.addEventListener('focus', () => (input.placeholder = ''));
  input.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') createTask();
  });

  setDragDropEvents();
  updateTasksCounters();
}

window.onload = () => start();
