import '../scss/style.scss';
import { createTask } from './files/task';
import { updateTasksCounters } from './files/functions';

function start() {
  const createTaskButton = document.querySelector('.todo__create')!;
  const input: HTMLInputElement = document.querySelector('.todo__input')!;
  const rowWithTasks = document.querySelector('.row--tasks')!;
  const tasksPlaceholders = document.querySelectorAll('.todo__placeholder');

  createTaskButton.addEventListener('click', createTask);
  input.addEventListener('focus', () => (input.placeholder = ''));

  rowWithTasks.addEventListener('dragstart', (event) => {
    const task = event.target as HTMLElement;
    task.classList.add('hold');
    setTimeout(() => task.classList.add('hide'), 0);

    tasksPlaceholders.forEach((placeholder) => {
      placeholder.addEventListener('dragover', (event) => event.preventDefault());
      placeholder.addEventListener('dragenter', (event) => {
        placeholder.classList.add('selected');
      });
      placeholder.addEventListener('dragleave', (event) => {
        placeholder.classList.remove('selected');
      });
    });
  });

  rowWithTasks.addEventListener('dragend', (event) => {
    const task = event.target as HTMLElement;
    task.classList.remove('hold');
    task.classList.remove('hide');

    tasksPlaceholders.forEach((placeholder) => {
      placeholder.addEventListener('drop', (event) => {
        placeholder.classList.remove('selected');
        placeholder.appendChild(task);
        updateTasksCounters();
      });
    });
  });

  // rowWithTasks.addEventListener('dragenter', (event) => {
  //   const target = event.target as HTMLElement;
  //   target.classList.add('selected');
  // });

  // tasksPlaceholders.forEach((placeholder) => {
  //   placeholder.addEventListener('dragover', (event) => event.preventDefault());
  //   placeholder.addEventListener('dragenter', (event) => {
  //     const target = event.target as HTMLElement;
  //     console.log(target);
  //     target.classList.add('selected');
  //   });
  //   placeholder.addEventListener('dragleave', (event) => {
  //     const target = event.target as HTMLElement;
  //     target.classList.remove('selected');
  //   });
  //   placeholder.addEventListener('drop', (event) => {
  //     const target = event.target as HTMLElement;
  //     target.classList.remove('selected');
  //     // target.appendChild(item);
  //   });
  // });

  updateTasksCounters();
}

window.onload = () => start();
