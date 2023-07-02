import { createTaskElement } from './task';

export function setLocalStorage(): void {
  const tasks = Array.from(document.querySelectorAll('.todo__task')).map((task) => {
    const taskElement = task as HTMLElement;
    const taskText = taskElement.firstElementChild?.textContent;
    const taskType = taskElement.dataset.type;

    return [taskText, taskType];
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function getLocalStorage(): void {
  const storageTasks = localStorage.getItem('tasks');

  if (storageTasks) {
    const tasks: string[][] = JSON.parse(storageTasks);

    tasks.forEach((task) => {
      createTaskElement(task[0], task[1]);
    });
  }
}

// setLocalStorage();
