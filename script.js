document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
        }
    });

    function addTask(task) {
        const li = document.createElement("li");
        li.textContent = task;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Rimuovi";
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    }
});
