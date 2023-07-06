import '../scss/style.scss';
import { createTask, removeTask } from './files/task';
import { setDragDropEvents, updateTasksCounters } from './files/functions';
import { getLocalStorage, setLocalStorage } from './files/localStorage';

function start(): void {
  const createTaskButton = document.querySelector('.todo__create')!;
  const input: HTMLInputElement = document.querySelector('.todo__input')!;
  const rowWithTasks = document.querySelector('.row--tasks')!;

  createTaskButton.addEventListener('click', createTask);

  input.addEventListener('focus', () => (input.placeholder = ''));
  input.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') createTask();
  });

  rowWithTasks.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    if (target.closest('.task__remove')) {
      const selectedTask = target.closest('.todo__task') as HTMLElement;
      removeTask(selectedTask);
    }
  });

  setDragDropEvents();
  updateTasksCounters();
}

window.onload = (): void => {
  getLocalStorage();
  start();
};
window.onunload = (): void => setLocalStorage();
