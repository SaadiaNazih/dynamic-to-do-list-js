document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById('Add Task');
    const taskInput = document.getElementById(id="task-input");
    const taskList = document.getElementById(id="task-list");


    addTaskBtn.addEventListener("click", () => {
        const taskText = addButton.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            addButton.value = "";
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
