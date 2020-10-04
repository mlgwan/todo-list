import "../Assets/Styles/styles.css";
import { createProjectInSidebar, createProjectInMainContent } from "./project";
import {
  createTaskInSideBar,
  createTaskInMainContent,
  getPriorityColor,
} from "./task";
import createProjectPrompt from "./projectPrompt";
import createTaskPrompt from "./taskPrompt";

const projectsHolderSidebar = document.getElementById("projects");
const projectsHolderMaincontent = document.getElementById("projects-holder");
const projectsOpenIcon = document.getElementById("projects-open-icon");
const projectsAddIcon = document.getElementById("projects-add-icon");
const overlay = document.getElementById("overlay");

const DataController = (() => {
  const projects = [];

  function* generateId(id) {
    let result = id;
    while (true) {
      yield result;
      result += 1;
    }
  }

  const projectIdGenerator = generateId(0);

  const addToProjects = (projectName) => {
    const newProject = {
      name: projectName,
      tasks: [],
      id: projectIdGenerator.next().value,
      taskIdGenerator: generateId(0),
    };

    projects.push(newProject);
  };

  const getProjects = () => projects;

  const getLatestProjectId = () => projects[projects.length - 1].id;

  const addTaskToProject = (id, task) => {
    const parentProject = projects.find((project) => id === project.id);
    const newTask = {
      name: task.children[0].children[1].value,
      description: task.children[2].children[0].value,
      dueDate: task.children[3].children[0].valueAsDate,
      priority: task.children[1].value,
      id: parentProject.taskIdGenerator.next().value,
    };
    parentProject.tasks.push(newTask);
  };
  const getLatestTaskId = (p) =>
    projects[p.value].tasks[projects[p.value].tasks.length - 1].id;

  const deleteTaskFromProject = (projectId, taskId) => {
    const newProject = projects.find((project) => projectId === project.id);
    const taskToDeleteIndex = newProject.tasks.findIndex(
      (task) => taskId === task.id
    );
    newProject.tasks.splice(taskToDeleteIndex, 1);
  };

  const editTask = (projectId, taskId, taskToEdit) => {
    const projectIndex = projects.findIndex(
      (project) => project.id === projectId
    );
    const taskIndex = projects[projectIndex].tasks.findIndex(
      (task) => task.id === taskId
    );
    const newTask = {
      name: taskToEdit.children[0].children[1].value,
      description: taskToEdit.children[2].children[0].value,
      dueDate: taskToEdit.children[3].children[0].valueAsDate,
      priority: taskToEdit.children[1].value,
      id: taskId,
    };
    projects[projectIndex].tasks[taskIndex] = newTask;
  };

  return {
    addToProjects,
    getProjects,
    addTaskToProject,
    deleteTaskFromProject,
    editTask,
    getLatestProjectId,
    getLatestTaskId,
  };
})();

const UIController = (() => {
  const projects = [];

  const showOverlay = () => {
    overlay.style.display = "flex";
  };

  const hideOverlay = () => {
    overlay.style.display = "none";
  };

  const updateProject = (index, project) => {
    projects[index] = project;
  };

  const displayProject = (index) => {
    projectsHolderMaincontent.innerHTML = "";
    projectsHolderMaincontent.appendChild(projects[index]);
  };

  const closeEntry = (target) => {
    const entry = target;
    if (entry.children[1]) {
      if (!entry.classList.contains("closed")) {
        entry.classList.add("closed");
        entry.children[0].children[0].className = "open-icon";
      } else {
        entry.classList.remove("closed");
        entry.children[0].children[0].className = "close-icon";
      }
    }
  };

  const openTaskPrompt = (sParent, mParent, tte) => {
    const sidebarParent = sParent;
    const mainParent = mParent;
    const taskToEdit = tte;
    if (taskToEdit === false) {
      createTaskPrompt();
      showOverlay();
      document
        .getElementById("add-task-button-cancel")
        .addEventListener("click", hideOverlay);
      document
        .getElementById("add-task-button-create")
        .addEventListener("click", () =>
          createFinalTask(sidebarParent, mainParent)
        );
    } else {
      createTaskPrompt();
      document.getElementById("add-task-button-create").textContent = "Edit";

      showOverlay();

      document.getElementById("task-input-form").children[1].value =
        mainParent.children[taskToEdit].children[0].children[1].value;
      document.getElementById("task-input-form").children[4].value =
        mainParent.children[taskToEdit].children[2].children[0].value;
      document.getElementById("task-input-form").children[7].children[1].value =
        mainParent.children[taskToEdit].children[3].children[0].value;
      document.getElementById(
        "task-input-form"
      ).children[10].children[1].value =
        mainParent.children[taskToEdit].children[1].value;

      document
        .getElementById("add-task-button-cancel")
        .addEventListener("click", hideOverlay);
      document
        .getElementById("add-task-button-create")
        .addEventListener("click", () => {
          mainParent.children[
            taskToEdit
          ].children[0].children[1].value = document.getElementById(
            "task-input-form"
          ).children[1].value;
          mainParent.children[
            taskToEdit
          ].children[2].children[0].value = document.getElementById(
            "task-input-form"
          ).children[4].value;
          mainParent.children[
            taskToEdit
          ].children[3].children[0].value = document.getElementById(
            "task-input-form"
          ).children[7].children[1].value;
          mainParent.children[
            taskToEdit
          ].children[1].value = document.getElementById(
            "task-input-form"
          ).children[10].children[1].value;
          mainParent.children[
            taskToEdit
          ].children[1].style.background = getPriorityColor(
            document.getElementById("task-input-form").children[10].children[1]
              .value
          );

          sidebarParent.children[
            taskToEdit + 1
          ].children[0].children[1].textContent = document.getElementById(
            "task-input-form"
          ).children[1].value;
          sidebarParent.children[
            taskToEdit + 1
          ].children[0].children[0].style.background = getPriorityColor(
            document.getElementById("task-input-form").children[10].children[1]
              .value
          );

          DataController.editTask(
            mainParent.value,
            mainParent.children[taskToEdit].value,
            mainParent.children[taskToEdit]
          );
          hideOverlay();

          updateProject(mainParent.value, mainParent.parentElement);
        });
    }
  };

  const createFinalProject = () => {
    const name = document.getElementById("project-input-form").children[1]
      .value;
    if (name) {
      projectsHolderMaincontent.innerHTML = "";
      const newProjectSide = createProjectInSidebar(name);
      projectsHolderSidebar.appendChild(newProjectSide);
      newProjectSide.children[0].children[0].addEventListener("click", () =>
        closeEntry(newProjectSide)
      );
      newProjectSide.children[0].children[1].addEventListener("click", () =>
        displayProject(newProjectSide.value)
      );
      projectsHolderSidebar.classList.add("closed");
      closeEntry(projectsHolderSidebar);

      const newProjectMain = createProjectInMainContent(name);
      newProjectMain.children[0].children[1].addEventListener("click", () =>
        openTaskPrompt(newProjectSide, newProjectMain.children[1], false)
      );
      projectsHolderMaincontent.appendChild(newProjectMain);
      DataController.addToProjects(name);
      newProjectMain.children[1].value = DataController.getLatestProjectId();
      newProjectSide.value = newProjectMain.children[1].value;

      projects.push(newProjectMain);
      hideOverlay();
    }
    projectsOpenIcon.className = "close-icon";
  };

  const createFinalTask = (sParent, mParent) => {
    const sidebarParent = sParent;
    const mainParent = mParent;
    const title = document.getElementById("task-input-form").children[1].value;
    const description = document.getElementById("task-input-form").children[4]
      .value;
    const dueDate = document.getElementById("task-input-form").children[7]
      .children[1].value;
    const priority = document.getElementById("task-input-form").children[10]
      .children[1].value;
    if (title && dueDate && priority) {
      const newTaskSide = createTaskInSideBar(
        title,
        description,
        dueDate,
        priority
      );
      sidebarParent.appendChild(newTaskSide);
      sidebarParent.classList.add("closed");
      closeEntry(sidebarParent);

      const newTaskMain = createTaskInMainContent(
        title,
        description,
        dueDate,
        priority
      );
      mainParent.appendChild(newTaskMain);

      DataController.addTaskToProject(mainParent.value, newTaskMain);
      hideOverlay();

      mainParent.lastChild.value = DataController.getLatestTaskId(mainParent);
      sidebarParent.lastChild.value = mainParent.lastChild.value;

      mainParent.lastChild.children[0].children[2].children[1].addEventListener(
        "click",
        (e) => {
          DataController.deleteTaskFromProject(
            mainParent.value,
            e.target.parentElement.parentElement.parentElement.value
          );
          newTaskSide.remove();
          newTaskMain.remove();
          updateProject(mainParent.value, mainParent.parentElement);
        }
      );

      mainParent.lastChild.children[0].children[2].children[0].addEventListener(
        "click",
        (e) => {
          openTaskPrompt(
            sidebarParent,
            mainParent,
            Array.from(
              e.target.parentElement.parentElement.parentElement.parentElement
                .children
            ).indexOf(newTaskMain)
          );
        }
      );
    }

    updateProject(mainParent.value, mainParent.parentElement);
  };

  const openProjectPrompt = () => {
    createProjectPrompt();
    showOverlay();
    document
      .getElementById("add-project-button-cancel")
      .addEventListener("click", hideOverlay);
    document
      .getElementById("add-project-button-create")
      .addEventListener("click", createFinalProject);
  };

  return {
    openProjectPrompt,
    showOverlay,
    hideOverlay,
    createFinalProject,
    closeEntry,
  };
})();

projectsOpenIcon.addEventListener("click", () =>
  UIController.closeEntry(projectsHolderSidebar)
);
projectsAddIcon.addEventListener("click", UIController.openProjectPrompt);
