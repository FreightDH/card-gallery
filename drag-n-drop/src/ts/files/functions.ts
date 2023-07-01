export function updateTasksCounters() {
  const tasksCounters = document.querySelectorAll('.header__count');
  const tasksPlaceholders = document.querySelectorAll('.todo__placeholder');

  tasksCounters.forEach((counter, index) => {
    counter.textContent = `${tasksPlaceholders[index].childElementCount}`;
  });
}
