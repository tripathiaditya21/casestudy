// Get DOM Elements
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  const dueDate = taskDate.value;
  const dueTime = taskTime.value;

  if (taskText !== "" && dueDate && dueTime) {
    addTask(taskText, dueDate, dueTime);
    taskInput.value = "";
    taskDate.value = "";
    taskTime.value = "";
  } else {
    alert("Please fill out all fields (task, date, and time).");
  }
});

// Add Task Function
function addTask(text, date, time) {
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  taskItem.innerHTML = `
    <div>
      <span>${text}</span>
      <div class="task-due-date">Due: ${date} ${time}</div>
    </div>
    <div class="task-buttons">
      <button class="complete-btn">✔</button>
      <button class="edit-btn">✏️</button>
      <button class="delete-btn">🗑️</button>
    </div>
  `;

  taskList.appendChild(taskItem);

  // Mark Task as Complete
  taskItem.querySelector(".complete-btn").addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });

  // Edit Task
  taskItem.querySelector(".edit-btn").addEventListener("click", () => {
    const newText = prompt("Edit task:", text);
    if (newText) {
      taskItem.querySelector("span").textContent = newText;
    }
  });

  // Delete Task
  taskItem.querySelector(".delete-btn").addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });
}
