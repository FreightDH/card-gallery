import { updateTasksCounters } from './functions';

export function createTask() {
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

function createTaskElement(task: string) {
  const todoColumn = document.querySelector('.placeholder--todo')!;
  const taskItem = document.createElement('div');
  taskItem.classList.add('todo__task');
  taskItem.setAttribute('draggable', 'true');

  const taskText = document.createElement('p');
  taskText.classList.add('task__text');
  taskText.textContent = task;

  const taskRemove = document.createElement('button');
  taskRemove.classList.add('task__remove');
  taskRemove.innerHTML = '<span>—</span>';

  taskItem.append(taskText, taskRemove);
  todoColumn.appendChild(taskItem);
}
