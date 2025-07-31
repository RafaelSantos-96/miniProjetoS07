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
  taskList.innerHTML = "";

  tasks
  .filter(task => task.toLowerCase().includes(filter.toLowerCase()))
  .forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";
    removeBtn.onclick = () => removeTask(index);

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  });
}

const removeTask = (indexToRemove) => {
  tasks = tasks.filter((_, index) => index !== indexToRemove);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks(searchInput.value);
};

searchInput.addEventListener("input", () => {
  renderTasks(searchInput.value);
});

  renderTasks();
