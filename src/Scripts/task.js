function createElement(type) {
  return document.createElement(type);
}

function getPriorityColor(priority) {
  switch (priority) {
    case "Low":
      return "#0f0";
    case "Medium":
      return "#ff0";
    case "High":
      return "#f00";
    default:
      return "Error";
  }
}

function createTaskInSideBar(title, description, dueDate, priority) {
  const task = createElement("div");
  task.className = "task-entry";

  const taskHeading = createElement("div");
  taskHeading.className = "task-sidebar-heading";

  const taskIcon = createElement("div");
  taskIcon.className = "task-sidebar-icon";
  taskIcon.style.background = getPriorityColor(priority);

  const taskTitle = createElement("span");
  taskTitle.className = "side-bar-entry-task";
  taskTitle.textContent = title;

  taskHeading.appendChild(taskIcon);
  taskHeading.appendChild(taskTitle);

  task.appendChild(taskHeading);

  return task;
}

function createTaskInMainContent(title, description, dueDate, priority) {
  const task = createElement("div");
  task.className = "task";

  const upperRow = createElement("div");
  upperRow.className = "task-upper-row";

  const checkBox = createElement("input");
  checkBox.className = "task-checkbox";
  checkBox.type = "checkbox";

  const titleHolder = createElement("input");
  titleHolder.className = "task-title";
  titleHolder.type = "text";
  titleHolder.value = title;
  titleHolder.disabled = true;

  const buttons = createElement("div");
  buttons.className = "task-buttons";

  const editButton = createElement("div");
  editButton.className = "task-edit-btn";

  const deleteButton = createElement("div");
  deleteButton.className = "task-delete-btn";

  buttons.appendChild(editButton);
  buttons.appendChild(deleteButton);

  upperRow.appendChild(checkBox);
  upperRow.appendChild(titleHolder);
  upperRow.appendChild(buttons);

  const priorityBar = createElement("hr");
  priorityBar.className = "task-priority-bar";
  priorityBar.style.background = getPriorityColor(priority);
  priorityBar.value = priority;

  const descriptionHolder = createElement("div");
  descriptionHolder.className = "task-description";

  const descriptionTextarea = createElement("textarea");
  descriptionTextarea.value = description;
  descriptionTextarea.cols = 40;
  descriptionTextarea.rows = 10;
  descriptionTextarea.style.resize = "none";
  descriptionTextarea.style.padding = "1%";
  descriptionTextarea.disabled = true;

  descriptionHolder.appendChild(descriptionTextarea);

  const dueDateHolder = createElement("div");
  dueDateHolder.className = "task-due-date";

  const dueDateCalendar = createElement("input");
  dueDateCalendar.type = "date";
  dueDateCalendar.value = dueDate;
  dueDateCalendar.disabled = true;

  dueDateHolder.appendChild(dueDateCalendar);

  task.appendChild(upperRow);
  task.appendChild(priorityBar);
  task.appendChild(descriptionHolder);
  task.appendChild(dueDateHolder);

  return task;
}

export { createTaskInSideBar, createTaskInMainContent, getPriorityColor };
