function createProjectPrompt() {
  document.getElementById("overlay").innerHTML = "";

  const prompt = document.createElement("div");
  prompt.id = "project-input-form";

  const inputText = document.createElement("input");
  inputText.type = "text";
  inputText.placeholder = "name";
  inputText.required = true;

  const inputButtons = document.createElement("div");
  inputButtons.id = "add-project-buttons";

  const cancelButton = document.createElement("button");
  cancelButton.id = "add-project-button-cancel";
  cancelButton.textContent = "Cancel";

  const createButton = document.createElement("button");
  createButton.id = "add-project-button-create";
  createButton.textContent = "Create";

  inputButtons.appendChild(cancelButton);
  inputButtons.appendChild(createButton);

  prompt.appendChild(document.createElement("br"));
  prompt.appendChild(inputText);
  prompt.appendChild(document.createElement("br"));
  prompt.appendChild(document.createElement("br"));
  prompt.appendChild(inputButtons);

  document.getElementById("overlay").appendChild(prompt);
}

export default createProjectPrompt;
