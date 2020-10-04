function createTaskPrompt() {
  document.getElementById("overlay").innerHTML = "";

  const prompt = document.createElement("div");
  prompt.id = "task-input-form";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Title";
  titleInput.required = true;

  const descriptionInput = document.createElement("textarea");
  descriptionInput.placeholder = "Description";
  descriptionInput.required = true;

  const dueDateWrapper = document.createElement("div");

  const dueDateLabel = document.createElement("span");
  dueDateLabel.style.fontSize = "12px";
  dueDateLabel.textContent = "Deadline: ";

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.placeholder = "Due Date";
  dueDateInput.required = true;

  dueDateWrapper.appendChild(dueDateLabel);
  dueDateWrapper.appendChild(dueDateInput);

  const priorityWrapper = document.createElement("div");

  const priorityLabel = document.createElement("span");
  priorityLabel.style.fontSize = "12px";
  priorityLabel.textContent = "Priority: ";

  const priorityInput = document.createElement("select");
  priorityInput.required = true;
  const lowOption = document.createElement("option");
  lowOption.value = "Low";
  lowOption.textContent = "Low";
  const mediumOption = document.createElement("option");
  mediumOption.value = "Medium";
  mediumOption.textContent = "Medium";
  const highOption = document.createElement("option");
  highOption.value = "High";
  highOption.textContent = "High";

  priorityWrapper.appendChild(priorityLabel);
  priorityWrapper.appendChild(priorityInput);

  priorityInput.appendChild(lowOption);
  priorityInput.appendChild(mediumOption);
  priorityInput.appendChild(highOption);

  const inputButtons = document.createElement("div");
  inputButtons.id = "add-task-buttons";

  const cancelButton = document.createElement("button");
  cancelButton.id = "add-task-button-cancel";
  cancelButton.textContent = "Cancel";

  const createButton = document.createElement("button");
  createButton.id = "add-task-button-create";
  createButton.textContent = "Create";

  inputButtons.appendChild(cancelButton);
  inputButtons.appendChild(createButton);

  prompt.appendChild(document.createElement("br"));
  prompt.appendChild(titleInput);
  prompt.appendChild(document.createElement("br"));
  prompt.appendChild(document.createElement("br"));
  prompt.appendChild(descriptionInput);
  prompt.appendChild(document.createElement("br"));
  prompt.appendChild(document.createElement("br"));
  prompt.appendChild(dueDateWrapper);
  prompt.appendChild(document.createElement("br"));
  prompt.appendChild(document.createElement("br"));
  prompt.appendChild(priorityWrapper);
  prompt.appendChild(document.createElement("br"));
  prompt.appendChild(document.createElement("br"));
  prompt.appendChild(inputButtons);

  document.getElementById("overlay").appendChild(prompt);
}

export default createTaskPrompt;
