const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const addTask = (event) => {
  event.preventDefault();
  const newTask = taskInput.value.trim();
  if (newTask) {
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInput.value = "";
    renderTasks(searchInput.value);
  }
};

taskForm.addEventListener("submit", addTask);

const renderTasks = (filter = "") => {
  taskList.innerHTML = ""; }










  renderTasks();
