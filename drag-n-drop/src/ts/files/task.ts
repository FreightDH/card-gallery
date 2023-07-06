import { updateTasksCounters } from './functions';

export function createTaskElement(task: string, type: string = 'todo'): HTMLElement {
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
  return taskItem;
}

export function appendTaskElement(taskElement: HTMLElement): void {
  const todoColumn = document.querySelector('.placeholder--todo')!;
  const progressColumn = document.querySelector('.placeholder--progress')!;
  const closedColumn = document.querySelector('.placeholder--closed')!;
  const type = taskElement.dataset.type;

  switch (type) {
    case 'todo':
      todoColumn.appendChild(taskElement);
      break;
    case 'progress':
      progressColumn.appendChild(taskElement);
      break;
    case 'closed':
      closedColumn.appendChild(taskElement);
      break;
    default:
      break;
  }
}

export function createTask(): void {
  const input: HTMLInputElement = document.querySelector('.todo__input')!;
  const taskText = input.value;

  if (taskText) {
    const taskElement = createTaskElement(taskText);
    appendTaskElement(taskElement);
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
