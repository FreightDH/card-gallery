export function updateTasksCounters(): void {
  const tasksCounters = document.querySelectorAll('.header__count');
  const tasksPlaceholders = document.querySelectorAll('.todo__placeholder');

  tasksCounters.forEach((counter, index) => {
    counter.textContent = `${tasksPlaceholders[index].childElementCount}`;
  });
}

export function setDragDropEvents(): void {
  const rowWithTasks = document.querySelector('.row--tasks')!;

  rowWithTasks.addEventListener('dragstart', (event) => {
    const task = event.target as HTMLElement;
    task.classList.add('hold');
    setTimeout(() => task.classList.add('hide'), 0);
  });

  rowWithTasks.addEventListener('dragend', (event) => {
    const task = event.target as HTMLElement;
    task.classList.remove('hold');
    task.classList.remove('hide');
  });

  rowWithTasks.addEventListener('dragenter', (event) => {
    const target = event.target as HTMLElement;
    target.classList.add('selected');
  });

  rowWithTasks.addEventListener('dragleave', (event) => {
    const target = event.target as HTMLElement;
    target.classList.remove('selected');
  });

  rowWithTasks.addEventListener('dragover', (event) => event.preventDefault());

  rowWithTasks.addEventListener('drop', (event) => {
    const target = event.target as HTMLElement;

    if (!target.closest('.todo__task')) {
      const task = document.querySelector('.hold')!;

      target.classList.remove('selected');
      target.appendChild(task);
      updateTasksCounters();
    }
  });
}
