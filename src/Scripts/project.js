function createProjectInSidebar(name) {
  const project = document.createElement("div");
  project.className = "projects-entry";

  const projectHeading = document.createElement("div");
  projectHeading.className = "projects-sidebar-heading";

  const projectOpenIcon = document.createElement("div");
  projectOpenIcon.className = "open-icon";

  const projectName = document.createElement("span");
  projectName.className = "side-bar-entry";
  projectName.textContent = name;

  projectHeading.appendChild(projectOpenIcon);
  projectHeading.appendChild(projectName);

  project.appendChild(projectHeading);

  return project;
}

function createProjectInMainContent(name) {
  // const projectHolder = document.getElementById('projects-holder');
  // console.log(projectHolder);
  // projectHolder.innerHTML = '';

  const project = document.createElement("div");
  project.className = "project";

  const projectHeading = document.createElement("div");
  projectHeading.className = "project-heading";

  const projectTitle = document.createElement("span");
  projectTitle.className = "project-title";
  projectTitle.textContent = name;

  const projectHeadingAddIcon = document.createElement("div");
  projectHeadingAddIcon.className = "project-heading-add-icon";

  projectHeading.appendChild(projectTitle);
  projectHeading.appendChild(projectHeadingAddIcon);

  const taskHolder = document.createElement("div");
  taskHolder.className = "task-holder";

  project.appendChild(projectHeading);
  project.appendChild(taskHolder);

  return project;
}

export { createProjectInSidebar, createProjectInMainContent };
