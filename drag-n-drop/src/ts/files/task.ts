import { updateTasksCounters } from './functions';

export function createTaskElement(task: string, type: string = 'todo'): void {
  const todoColumn = document.querySelector('.placeholder--todo')!;
  const progressColumn = document.querySelector('.placeholder--progress')!;
  const closedColumn = document.querySelector('.placeholder--closed')!;
  const taskItem = document.createElement('div');

  taskItem.classList.add('todo__task');
  taskItem.setAttribute('draggable', 'true');
  taskItem.setAttribute('data-type', type);

  const taskText = document.createElement('p');
  taskText.classList.add('task__text');
  taskText.textContent = task;

  const taskRemove = document.createElement('button');
  taskRemove.classList.add('task__remove');
  taskRemove.innerHTML = '<span>—</span>';

  taskItem.append(taskText, taskRemove);

  switch (type) {
    case 'todo':
      todoColumn.appendChild(taskItem);
      break;
    case 'progress':
      progressColumn.appendChild(taskItem);
      break;
    case 'closed':
      closedColumn.appendChild(taskItem);
      break;
    default:
      break;
  }
}

export function createTask(): void {
  const input: HTMLInputElement = document.querySelector('.todo__input')!;
  const task = input.value;

  if (task) {
    createTaskElement(task);
    updateTasksCounters();
    input.value = '';
  } else {
    input.placeholder = 'You must enter the task!';
  }
}

export function removeTask(task: HTMLElement): void {
  task.remove();
  updateTasksCounters();
}
