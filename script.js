document.addEventListener("DOMContentLoaded", () => {
    // Select the "Add Task" button and store it in a constant named addButton
const addButton = document.getElementById('add-task-btn');

// Select the input field where users enter tasks and store it in a constant named taskInput
const taskInput = document.getElementById('task-input');

// Select the unordered list that will display the tasks and store it in a constant named taskList
const taskList = document.getElementById('task-list');


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
